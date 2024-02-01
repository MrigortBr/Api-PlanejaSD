import connection from '../database/connection';
import { JustifyChoiceType } from '../entities/JustifyChoice';

export async function listJustifyChoiceById(
  idJustifyChoice: number,
): Promise<JustifyChoiceType> {
  return new Promise<JustifyChoiceType>(async (resolve, reject) => {
    try {
      const result: JustifyChoiceType[] = await connection(
        'justify_choice as jc',
      )
        .select(
          'jc.id',
          'cjc.id as idJustifyChoiceByQuestion',
          'jc.title',
          'jc.score',
        )
        .join('choice_justify_choice as cjc', 'cjc.id_justify_choice', 'jc.id')
        .where('cjc.id', 1);

      resolve(result[0]);
    } catch (error) {
      reject(error);
    }
  });
}
