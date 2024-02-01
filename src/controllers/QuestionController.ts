import { Request, Response } from 'express';
import { listByCourse } from '../repositories/QuestionsRepository';

export async function listQuestionByIDCourse(req: Request, res: Response) {
  const courseId: number = parseInt(req.params.id, 10);
  listByCourse(courseId)
    .then((response) => {
      res.json(response);
      res.send(200);
    })
    .catch((error) => {});
}
