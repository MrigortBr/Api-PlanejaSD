import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { UsersRegisters } from '../entities/UsersRegisters';
import { findUserByid } from '../repositories/UsersRegistersRepository';
import { resolve } from 'path';

export function getJwt(req: Request): string {
  return req.header('Authorization')?.split(' ')[1];
}

export function decodeJwt(jwtKey: string) {
  const keyJwt = decode(jwtKey);
  return keyJwt;
}

export async function getDataUser(req: Request): Promise<UsersRegisters> {
  const keyJwt = getJwt(req);

  if (keyJwt === undefined) {
    return Promise.reject(new Error('É necessario chave de autenticação'));
  }

  const decoded = decodeJwt(keyJwt);
  try {
    if (decoded.id === undefined) {
    }
  } catch (error) {
    return Promise.reject(new Error('Chave de autencação invalida'));
  }

  const id = decoded.id;
  return new Promise<UsersRegisters>(async (resolve, reject) => {
    await findUserByid(id)
      .then((r) => {
        resolve(r);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
