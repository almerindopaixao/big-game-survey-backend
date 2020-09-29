// Importando o framework express
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import dotenv from 'dotenv';

dotenv.config();

class App {
  public app = express();

  constructor() {
    this.middlewares();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
}

export default new App().app;
