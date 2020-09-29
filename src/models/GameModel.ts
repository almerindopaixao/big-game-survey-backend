import GameSchema from '../database/GameSchema';

interface Game {
  _id: number;
  title: string;
  platform: number;
  genre_id: number;
  _v: number;
}

class GameModel {
  // private _genre: Genre; // genere_id
  // private _records: Record[] = [];

  async searchGames(): Promise<Game[] | void> {
    const gamesPromise = ((await GameSchema.find()) as unknown) as Game[];
    if (!gamesPromise) return;
    return gamesPromise;
  }
}

export default new GameModel();
