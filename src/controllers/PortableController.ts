import { Request, Response } from 'express';
import { Course } from '../entities/Portable';
import { ErrorType, buildErrorResponse } from '../entities/errors';
import { update } from '../services/PortableService';

export async function updateCourse(req: Request, res: Response) {
  const course: Course = req.body;
  await update(course)
    .then((response) => {
      console.log(response);
      res.status(200);
      res.json(response);
    })
    .catch((error: ErrorType) => {
      console.log(error);
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}
