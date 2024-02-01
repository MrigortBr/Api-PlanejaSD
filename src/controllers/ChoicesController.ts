import { Request, Response } from 'express';
import { listById } from '../repositories/ChoicesRepository';

export async function listChoiceByIdQuestion_Choice(
  req: Request,
  res: Response,
) {
  const courseId: number = parseInt(req.params.id, 10);
  listById(courseId)
    .then((response) => {
      res.json(response);
      res.send(200);
    })
    .catch((error) => {});
}
