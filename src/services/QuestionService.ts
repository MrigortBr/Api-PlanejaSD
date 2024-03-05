import {
  QuestionResponseType,
  QuestionType,
  RequisitionQuestionsResponseType,
} from '../entities/Question';
import { errors } from '../entities/errors';
import { listAll, listByCourse } from '../repositories/QuestionsRepository';

export async function listQuestionByCourse(
  courseId: number,
): Promise<RequisitionQuestionsResponseType> {
  return new Promise<RequisitionQuestionsResponseType>(
    async (resolve, reject) => {
      if (courseId > 0) {
        await listByCourse(courseId)
          .then(async (response) => {
            if (response.length == 0) {
              throw new Error('NoQuestions');
            }
            const result = await buildResponseQuestions(response);
            resolve(result);
          })
          .catch((error) => {
            if (error.message == '') {
              reject(errors[error.code]);
            }
            reject(errors[error.message]);
          });
      } else {
        reject(errors['ParametersInvalid']);
      }
    },
  );
}

export function buildResponseQuestions(
  questions: QuestionType[],
): RequisitionQuestionsResponseType {
  const response: RequisitionQuestionsResponseType = {
    code: 200,
    questions: [],
  };

  for (const question of questions) {
    const choices: string[] = [];

    for (const choice of question.idchoice) {
      choices.push(`${process.env.DOMAIN}question/${choice}/choices`);
    }

    const newQuestion: QuestionResponseType = {
      question: question,
      choices: choices,
    };

    response.questions.push(newQuestion);
  }

  return response;
}
