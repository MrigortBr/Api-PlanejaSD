import express, { Router } from 'express';
import { listQuestionByIDCourse } from '../controllers/QuestionController';

const router: Router = express.Router();

router.get('/:id/questions', listQuestionByIDCourse);

export default router;
