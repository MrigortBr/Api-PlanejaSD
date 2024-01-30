import connection from '../database/connection';
import { UsersRegisters, UsersRegistersType } from '../entities/UsersRegisters';

export async function findUserByid(id: number): Promise<UsersRegisters> {
  return new Promise<UsersRegisters>(async (resolve, reject) => {
    try {
      const result: UsersRegistersType[] = await connection
        .select('*')
        .from('users__registers')
        .where({ id: id });
      if (result.length === 0) {
        throw new Error('Usuário não encontrado');
      }
      const userFinded = new UsersRegisters(result[0]);
      resolve(userFinded);
    } catch (error) {
      reject(error);
    }
  });
}
