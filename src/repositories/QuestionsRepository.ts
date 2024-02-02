import connection from '../database/connection';
import { QuestionType } from '../entities/Question';

export async function listByCourse(courseId: number): Promise<QuestionType[]> {
  return new Promise<QuestionType[]>(async (resolve, reject) => {
    try {
      const result: QuestionType[] = await connection('courses_questions as cq')
        .select('q.id', 'q.title', 'q.position', 'q.text')
        .select(connection.raw('ARRAY_AGG(qc.id) as idChoice'))
        .leftJoin('questions as q', 'q.id', 'cq.id_question')
        .leftJoin('question_choice as qc', 'qc.id_question', 'q.id')
        .where('cq.id_course', courseId)
        .groupBy('q.id', 'q.title', 'q.position', 'q.text')
        .orderBy('position');
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
