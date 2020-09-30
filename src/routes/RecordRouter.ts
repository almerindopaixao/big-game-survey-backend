import { Router } from 'express';
import RecordController from '../controllers/RecordController';

const router = Router();

router.get('/', RecordController.index);
router.post('/', RecordController.store);

export default router;
