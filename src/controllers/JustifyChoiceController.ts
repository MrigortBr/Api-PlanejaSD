import { Request, Response } from 'express';
import { ErrorType, buildErrorResponse } from '../entities/errors';
import { listJustifyById } from '../services/JustifyChoiceService';

export async function listJustifyChoiceByIdController(
  req: Request,
  res: Response,
) {
  const justifyID: number = parseInt(req.params.id, 10);

  await listJustifyById(justifyID)
    .then((response) => {
      res.status(200);
      res.json(response);
    })
    .catch((error: ErrorType) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}
