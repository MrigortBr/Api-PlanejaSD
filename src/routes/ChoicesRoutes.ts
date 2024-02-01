import express, { Router } from 'express';
import { listChoiceByIdQuestion_Choice } from '../controllers/ChoicesController';

const router: Router = express.Router();

router.get('/:id/choices', listChoiceByIdQuestion_Choice);

export default router;
