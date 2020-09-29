import Game from './GameModel';

export default class Genre {
  private _id: number;
  private _name: string;
  private _games: Array<Game> = [];

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get games(): Game[] {
    return this._games;
  }
}
