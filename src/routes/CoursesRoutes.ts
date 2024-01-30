import express, { Router } from 'express';
import {
  listAllCourses,
  listCoursesByID,
} from '../controllers/coursesController';
import { authenticate } from '../middlewares/authentication';

const router: Router = express.Router();

router.get('/courses', listAllCourses);
router.get('/courses/:id', listCoursesByID);

export default router;
