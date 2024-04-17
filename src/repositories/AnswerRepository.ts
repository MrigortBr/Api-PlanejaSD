import connection from '../database/connection';
import { ChoiceType } from '../entities/Choice';

export async function AnswerChoice(
  idChoice: number,
  idUser: number,
): Promise<ChoiceType[]> {
  return new Promise<ChoiceType[]>(async (resolve, reject) => {
    try {
      const result: ChoiceType[] = await connection(
        'user_question_choice as uqc',
      ).insert({ id_question_choice: idChoice, id_user: idUser });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export async function AnswerJustify(
  idJustify: number,
  idUser: number,
  response: string,
): Promise<ChoiceType[]> {
  return new Promise<ChoiceType[]>(async (resolve, reject) => {
    try {
      const result: ChoiceType[] = await connection(
        'user_justify_choice as ujc',
      ).insert({
        id_user: idUser,
        response: response,
        id_choice_justify_choice: idJustify,
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
