import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: Number, required: true },
  genre_id: { type: Number, required: true },
});

autoIncrement.initialize(mongoose.connection);
GameSchema.plugin(autoIncrement.plugin, 'Game');

const GameModel = mongoose.model('Game', GameSchema);

export default GameModel;
