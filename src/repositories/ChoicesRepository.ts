import connection from '../database/connection';
import { ChoiceType } from '../entities/Choice';

export async function listById(idChoice: number): Promise<ChoiceType[]> {
  return new Promise<ChoiceType[]>(async (resolve, reject) => {
    try {
      const result: ChoiceType[] = await connection('choices as c')
        .select(
          'c.id',
          'qc.id as idQuestionChoice',
          'c.title',
          'c.score',
          'cjc.id as JustifyChoice',
        )
        .join('question_choice as qc', 'qc.id_choice', 'c.id')
        .leftJoin(
          'choice_justify_choice as cjc',
          'cjc.id_question_choice',
          'qc.id',
        )
        .where('qc.id', idChoice);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
