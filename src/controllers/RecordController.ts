import { Request, Response } from 'express';

import RecordModel from '../models/RecordModel';
import GameModel from '../models/GameModel';
import GenreModel from '../models/GenreModel';

interface Record {
  _id: number;
  name: string;
  age: number;
  game_id: number;
  _v: number;
  moment: Date;
}

interface RefactoryData {
  id: number;
  name: string;
  age: number;
  moment: Date | string;
  gameTitle: string;
  gamePlatform: string;
  genreName: string;
}

class RecordController {
  async index(req: Request, res: Response) {
    const min = req.query.min ? String(req.query.min) : '';
    const max = req.query.max ? String(req.query.max) : '';
    const page = req.query.page ? Number(req.query.page) : 0;
    const linesPerPage = req.query.linesPerPage
      ? Number(req.query.linesPerPage)
      : 12;
    const orderBy = req.query.orderBy ? String(req.query.orderBy) : 'moment';
    const direction = req.query.direction
      ? String(req.query.direction)
      : 'desc';

    const data: Record[] | void = await RecordModel.searchRecords({
      min,
      max,
      page,
      linesPerPage,
      orderBy,
      direction,
    });

    if (!data)
      return res.status(400).json({
        errors: ['Nunhum dado encontrado'],
      });

    const dataRefactory: RefactoryData[] = [];

    for (const record of data) {
      const { _id: id, name, age, game_id, moment } = record;

      const { title, platform, genre_id } = await GameModel.searchById(game_id);

      const { name: genreName } = await GenreModel.findGenreById(genre_id);

      dataRefactory.push({
        id,
        name,
        age,
        moment,
        gameTitle: title,
        gamePlatform: platform,
        genreName,
      });
    }

    const numberOfElements: number = await RecordModel.countOfRecords(min, max);

    const totalPages: number = Math.ceil(numberOfElements / linesPerPage);

    return res.json({
      content: dataRefactory,
      config: {
        pageNumber: page,
        pageSize: dataRefactory.length,
        totalPages,
        numberOfElements,
      },
    });
  }
  ////
  async store(req: Request, res: Response) {
    try {
      const recordModel = new RecordModel(req.body);
      await recordModel.createRecord();

      if (recordModel.errors.length > 0) {
        res.status(400).json({
          errors: recordModel.errors,
        });
        return;
      }

      if (recordModel.record) {
        const { _id: id, name, age, game_id, moment } = recordModel.record;

        const { title, platform, genre_id } = await GameModel.searchById(
          game_id,
        );

        const { name: genreName } = await GenreModel.findGenreById(genre_id);

        return res.json({
          id,
          name,
          age,
          moment,
          gameTitle: title,
          gamePlatform: platform,
          genreName,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(404).send('Aconteceu um erro desconhecido');
    }
  }
}

export default new RecordController();
