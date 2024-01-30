import { NextFunction, Request, Response } from 'express';
import { findUserByid } from '../repositories/UsersRegistersRepository';
import { decodeJwt, getDataUser, getJwt } from '../services/requisitionService';
import { UsersRegisters } from '../entities/UsersRegisters';

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
      console.log(r.typeId < 1);
      if (r.typeId < 1) {
        console.log('nao pode');
        throw new Error('Sem permissão para acessar essa rota'); //Read
      }
      next();
    })
    .catch((e) => {
      const errorName = e instanceof Error ? e.message : 'Erro desconhecido';
      res.status(404).send(errorName);
    });
}
