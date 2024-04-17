import { Request, Response } from 'express';
import { getDataUser } from './requisitionService';
import { listById } from '../repositories/ChoicesRepository';
import { AnswerResponse, responseAnswer } from '../entities/Answer';
import { errors } from '../entities/errors';
import { buildResponseChoice } from './ChoiceService';
import { AnswerChoice, AnswerJustify } from '../repositories/AnswerRepository';

export async function Awnswer(
  choiceId: number,
  justifyId: number,
  request: Request,
): Promise<AnswerResponse> {
  return new Promise<AnswerResponse>(async (resolve, reject) => {
    if (choiceId > 0 && justifyId > 0) {
      try {
        const user = await getDataUser(request);
        const response = request.body.response;

        await listById(choiceId)
          .then(async (question) => {
            if (question.length == 0) {
              throw new Error('NoChoices');
            }
            if (question[0].idQuestionChoice == choiceId && user.id > 0) {
              if (
                question[0].JustifyChoice == justifyId ||
                question[0].JustifyChoice == null
              ) {
                if (question[0].JustifyChoice !== null)
                  await AnswerJustify(justifyId, user.id, response);
                await AnswerChoice(choiceId, user.id);
                resolve(responseAnswer);
              }
            }
            reject(errors['ParametersInvalid']);
          })
          .catch((error) => {
            throw new Error(error);
          });
      } catch (error) {
        if (error.message == '') {
          reject(errors[error.code]);
        }
        reject(errors[error.message]);
      }
    } else {
      reject(errors['ParametersInvalid']);
    }
  });
}
