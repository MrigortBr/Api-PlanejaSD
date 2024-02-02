import express, { Router } from 'express';
import { AnswerController } from '../controllers/AnswerController';

const router: Router = express.Router();

router.post('/:idChoice/:idJustify', AnswerController);

export default router;
