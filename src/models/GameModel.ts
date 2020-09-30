import GameSchema from '../database/GameSchema';

interface Game {
  _id: number;
  title: string;
  platform: number;
  genre_id: number;
  _v: number;
}

enum Platform {
  'PC' = 0,
  'PLAYSTATION' = 1,
  'XBOX' = 2,
}

class GameModel {
  // private _genre: Genre; // genere_id
  // private _records: Record[] = [];

  async searchGames(): Promise<Game[] | void> {
    const gamesPromise = ((await GameSchema.find()) as unknown) as Game[];
    if (!gamesPromise) return;
    return gamesPromise;
  }

  async searchById(
    id: number,
  ): Promise<{ title: string; platform: string; genre_id: number }> {
    const game = ((await GameSchema.findById(id)) as unknown) as Game;
    return {
      title: game.title,
      platform: Platform[game.platform],
      genre_id: game.genre_id,
    };
  }
}

export default new GameModel();
