import { ErrorType, buildErrorResponse } from '../entities/errors';
import { listAll, listById } from '../repositories/CoursesRepository';
import { Request, Response } from 'express';
import {
  buildResponseAllCourse,
  buildResponseCourse,
  listAllCoursesService,
  listCoursesService,
} from '../services/CourseService';
export async function listAllCourses(req: Request, res: Response) {
  listAllCoursesService()
    .then((response) => {
      res.status(response.code);
      res.json(response.courses);
    })
    .catch((error) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}

export async function listCoursesByID(req: Request, res: Response) {
  const courseId: number = parseInt(req.params.id, 10);
  listCoursesService(courseId)
    .then((response) => {
      res.status(response.code);
      res.json(response.course);
    })
    .catch((error) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}
