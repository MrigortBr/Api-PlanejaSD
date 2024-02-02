import { Request, Response } from 'express';
import { listQuestionByCourse } from '../services/QuestionService';
import { ErrorType, buildErrorResponse } from '../entities/errors';

export async function listQuestionByIDCourse(req: Request, res: Response) {
  const courseId: number = parseInt(req.params.id, 10);
  await listQuestionByCourse(courseId)
    .then((response) => {
      res.status(response.code);
      res.json(response.questions);
    })
    .catch((error: ErrorType) => {
      res.status(error.code);
      res.json(buildErrorResponse(error));
    });
}
