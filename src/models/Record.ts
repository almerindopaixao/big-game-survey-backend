import Game from './Game';

export default class Genre {
  private _id: number;
  private _name: string;
  private _age: number;
  private _moment: Date;
  private _game: Game;

  constructor(id: number, name: string, age: number, moment: Date, game: Game) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._moment = moment;
    this._game = game;
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

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get moment(): Date {
    return this._moment;
  }

  set moment(value: Date) {
    this._moment = value;
  }

  get game(): Game {
    return this._game;
  }

  set game(value: Game) {
    this._game = value;
  }
}
