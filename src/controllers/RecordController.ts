import { Request, Response } from 'express';

import RecordModel from '../models/RecordModel';
import GameModel from '../models/GameModel';
import GenreModel from '../models/GenreModel';

class RecordController {
  async store(req: Request, res: Response) {
    try {
      const recordModel = new RecordModel(req.body);
      await recordModel.CreateRecord();

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
          moment,
          name,
          age,
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
