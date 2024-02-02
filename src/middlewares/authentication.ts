import { NextFunction, Request, Response } from 'express';
import { getDataUser } from '../services/requisitionService';
import { ErrorType, buildErrorResponse, errors } from '../entities/errors';

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const user = await getDataUser(req)
    .then((r) => {
      next();
    })
    .catch((e) => {
      const errorName = e instanceof Error ? e.message : 'Erro desconhecido';
      res.status(404).send(errorName);
    });
}

export async function authenticateByType(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  await getDataUser(req)
    .then((r) => {
      if (r.typeId > 2) {
        throw new Error('NoPermission'); //Read
      }
      next();
    })
    .catch((error) => {
      let responseError: ErrorType = null;
      if (error.message == '') {
        responseError = errors[error.code];
      }
      responseError = errors[error.message];

      res.status(responseError.code);
      res.json(buildErrorResponse(responseError));
    });
}
