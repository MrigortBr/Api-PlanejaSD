import { listAll, listById } from '../repositories/CoursesRepository';
import { Request, Response } from 'express';

export async function listAllCourses(req: Request, res: Response) {
  listAll()
    .then((response) => {
      res.json(response);
      res.send(200);
    })
    .catch((error) => {});
}

export async function listCoursesByID(req: Request, res: Response) {
  const courseId: number = parseInt(req.params.id, 10);
  listById(courseId)
    .then((response) => {
      res.json(response);
      res.send(200);
    })
    .catch((error) => {});
}
