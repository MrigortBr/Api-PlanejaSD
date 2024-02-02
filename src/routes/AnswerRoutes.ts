import express, { Router } from 'express';
import { AnswerController } from '../controllers/AnswerController';
import { authenticateByType } from '../middlewares/authentication';

const router: Router = express.Router();

router.post('/:idChoice/:idJustify', authenticateByType, AnswerController);

export default router;
