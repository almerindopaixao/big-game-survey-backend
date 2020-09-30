import RecordSchema from '../database/RecordSchema';

interface Record {
  _id?: number;
  name: string;
  age: number;
  game_id: number;
  _v?: number;
  moment?: Date;
}

export default class RecordModel {
  // private _game: Game; //game_id
  public errors: string[] = [];
  public record: Record | null = null;

  constructor(private body: Record) {}

  async CreateRecord(): Promise<void> {
    if (this.errors.length > 0) return;
    this.record = ((await RecordSchema.create(this.body)) as unknown) as Record;
  }
}
