import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

autoIncrement.initialize(mongoose.connection);
GenreSchema.plugin(autoIncrement.plugin, 'Genre');

const GenreModel = mongoose.model('Genre', GenreSchema);

export default GenreModel;
