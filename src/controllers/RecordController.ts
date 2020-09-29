import { Request, Response } from 'express';

import RecordModel from '../models/RecordModel';

class RecordController {
  async index() {}

  async store(req: Request, res: Response) {
    try {
      const record = new RecordModel(req.body);
      await record.CreateRecord();

      if (record.errors.length > 0) {
        res.status(400).json({
          errors: record.errors,
        });
        return;
      }

      return res.send('Usuário gravado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(404).send('Aconteceu um erro desconhecido');
    }
  }
}

export default new RecordController();
