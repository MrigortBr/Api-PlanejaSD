import { Request, Response } from 'express';
import { AnswerChoice, AnswerJustify } from '../repositories/AnswerRepository';
import { Awnswer } from '../services/AnswerService';
import { buildErrorResponse } from '../entities/errors';

export async function AnswerController(req: Request, res: Response) {
  const choiceId: number = parseInt(req.params.idChoice, 10);
  const justifyId: number = parseInt(req.params.idJustify, 10);
  await Awnswer(choiceId, justifyId, req)
    .then((response) => {
      res.status(response.code);
      res.json(response.text);
    })
    .catch((error) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });

  console.log('recebis');
}
