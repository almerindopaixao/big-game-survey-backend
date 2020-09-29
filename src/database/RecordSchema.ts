import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const RecordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  moment: { type: Date, default: Date.now },
  game_id: { type: Number, required: true },
});

autoIncrement.initialize(mongoose.connection);
RecordSchema.plugin(autoIncrement.plugin, 'Record');

const GenreModel = mongoose.model('Record', RecordSchema);

export default GenreModel;
