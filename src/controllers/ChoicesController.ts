import { Request, Response } from 'express';
import { listById } from '../repositories/ChoicesRepository';
import { buildErrorResponse } from '../entities/errors';
import { listChoiceByQuestionService } from '../services/ChoiceService';

export async function listChoiceByQuestion(req: Request, res: Response) {
  const choiceId: number = parseInt(req.params.id, 10);
  listChoiceByQuestionService(choiceId)
    .then((response) => {
      res.status(response.code);
      res.json(response.choice);
    })
    .catch((error) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}
