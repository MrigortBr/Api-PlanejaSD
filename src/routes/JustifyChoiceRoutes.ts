import express, { Router } from 'express';
import { listJustifyChoiceByIdController } from '../controllers/JustifyChoiceController';

const router: Router = express.Router();

router.get('/:id/justifyChoice', listJustifyChoiceByIdController);

export default router;
