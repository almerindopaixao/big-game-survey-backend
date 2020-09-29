import { Request, Response } from 'express';

import GameModel from '../models/GameModel';

enum Platform {
  'PC' = 0,
  'PLAYSTATION' = 1,
  'XBOX' = 2,
}

class GameController {
  async index(req: Request, res: Response) {
    try {
      const games = await GameModel.searchGames();

      if (!games) throw new Error('Banco de dados vazio');

      const gamesRefactory: {
        id: number;
        title: string;
        platform: string;
      }[] = games.map((value) => {
        return {
          id: value._id,
          title: value.title,
          platform: Platform[value.platform],
        };
      });

      return res.json(gamesRefactory);
    } catch (e) {
      return res.status(404).send(e);
    }
  }
}

export default new GameController();
