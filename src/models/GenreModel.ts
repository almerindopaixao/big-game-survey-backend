import GenreSchema from '../database/GenreSchema';

interface Genre {
  _id: number;
  name: string;
  _v: number;
}

export default class GenreModel {
  static async findGenreById(id: number): Promise<{ name: string }> {
    const genre = ((await GenreSchema.findById(id)) as unknown) as Genre;
    return {
      name: genre.name,
    };
  }
}
