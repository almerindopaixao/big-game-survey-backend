import RecordSchema from '../database/RecordSchema';
import GameSchema from '../database/GameSchema';

interface Record {
  _id: number;
  name: string;
  age: number;
  game_id: number;
  _v: number;
  moment: Date;
}

interface Body {
  name: string;
  age: number;
  game_id: number;
}

interface Querys {
  min: Date | string;
  max: Date | string;
  page: number;
  linesPerPage: number;
  orderBy: string;
  direction: string;
}

export default class RecordModel {
  // private _game: Game; //game_id
  public errors: string[] = [];
  public record: Record | null = null;

  constructor(private body: Body) {}

  static async countOfRecords(
    min: Date | string,
    max: Date | string,
  ): Promise<number> {
    let numberOfRecords: number;

    if (min === '' || max === '') {
      numberOfRecords = await RecordSchema.find().countDocuments();
    } else {
      numberOfRecords = await RecordSchema.find({
        moment: { $gte: min, $lte: max },
      }).countDocuments();
    }

    if (!numberOfRecords) return 0;
    return numberOfRecords;
  }

  async createRecord(): Promise<void> {
    const numberOfGames = (await GameSchema.find().countDocuments()) - 1;

    if (this.body.game_id < 0 || this.body.game_id > numberOfGames) {
      this.errors.push(
        `O Id do game informado é inválido: ${this.body.game_id}`,
      );
    }

    if (this.errors.length > 0) return;
    this.record = ((await RecordSchema.create(this.body)) as unknown) as Record;
  }

  static async searchRecords({
    min,
    max,
    page,
    direction,
    orderBy,
    linesPerPage,
  }: Querys): Promise<Record[] | void> {
    let records: Record[];

    if (min === '' || max === '') {
      records = ((await RecordSchema.find()
        .limit(linesPerPage)
        .skip(linesPerPage * page)
        .sort({ [orderBy]: direction })) as unknown) as Record[];
    } else {
      records = ((await RecordSchema.find({
        moment: { $gte: min, $lte: max },
      })
        .limit(linesPerPage)
        .skip(linesPerPage * page)
        .sort({ [orderBy]: direction })) as unknown) as Record[];
    }

    if (!records) return;
    return records;
  }
}
