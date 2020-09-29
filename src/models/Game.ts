import Genre from './Genre';
import Record from './Record';
import Platform from './Interfaces/Platform';

export default class Game {
  private _id: number;
  private _title: string;
  private _platform: Platform;
  private _genre: Genre;
  private _records: Record[] = [];

  constructor(id: number, title: string, platform: Platform, genre: Genre) {
    this._id = id;
    this._title = title;
    this._platform = platform;
    this._genre = genre;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get platform(): Platform {
    return this._platform;
  }

  set platform(value: Platform) {
    this._platform = value;
  }

  get genre(): Genre {
    return this._genre;
  }

  set genre(value: Genre) {
    this._genre = value;
  }

  get records(): Record[] {
    return this._records;
  }
}
