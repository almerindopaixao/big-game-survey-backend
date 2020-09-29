// Importando o framework express
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import GameRouter from './routes/GameRouter';

dotenv.config();

class App {
  public app = express();

  constructor() {
    this.middlewares();
    this.connection();
    this.router();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  router(): void {
    this.app.use('/games', GameRouter);
  }

  connection(): void {
    const connection = process.env.CONNECTIONSTRING as string;

    mongoose
      .connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        this.app.emit('ok');
      })
      .catch((e: Event) => console.log(e));
  }
}

export default new App().app;
