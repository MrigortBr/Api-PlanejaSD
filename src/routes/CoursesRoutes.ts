import express, { Router } from 'express';
import {
  listAllCourses,
  listCoursesByID,
} from '../controllers/coursesController';

const router: Router = express.Router();

router.get('/', listAllCourses);
router.get('/:id', listCoursesByID);

export default router;
