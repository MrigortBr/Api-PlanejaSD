import express, { Router } from 'express';
import { listChoiceByQuestion } from '../controllers/ChoicesController';

const router: Router = express.Router();

router.get('/:id/choices', listChoiceByQuestion);

export default router;
