import { Router } from 'express';
import GameController from '../controllers/GameController';

const router = Router();

router.get('/', GameController.index);

export default router;
