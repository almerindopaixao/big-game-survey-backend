import { Router } from 'express';
import RecordController from '../controllers/RecordController';

const router = Router();

router.post('/', RecordController.store);

export default router;
