import { Request, Response } from 'express';
import { listJustifyChoiceById } from '../repositories/JustifyChoiceRepository';

export async function listJustifyChoiceByIdController(
  req: Request,
  res: Response,
) {
  const courseId: number = parseInt(req.params.id, 10);
  listJustifyChoiceById(courseId)
    .then((response) => {
      res.json(response);
      res.send(200);
    })
    .catch((error) => {});
}
