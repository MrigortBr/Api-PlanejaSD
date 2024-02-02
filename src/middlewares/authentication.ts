import { NextFunction, Request, Response } from 'express';
import { getDataUser } from '../services/requisitionService';

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
  const user = await getDataUser(req)
    .then((r) => {
      if (r.typeId <= 2) {
        throw new Error('Sem permissão para acessar essa rota'); //Read
      }
      next();
    })
    .catch((e) => {
      const errorName = e instanceof Error ? e.message : 'Erro desconhecido';
      res.status(404).send(errorName);
    });
}
