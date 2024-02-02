import {
  ChoiceResponseType,
  ChoiceType,
  RequisitionChoicesResponseType,
} from '../entities/Choice';
import { errors } from '../entities/errors';
import { listById } from '../repositories/ChoicesRepository';

export async function listChoiceByQuestionService(
  choiceId: number,
): Promise<RequisitionChoicesResponseType> {
  return new Promise<RequisitionChoicesResponseType>(
    async (resolve, reject) => {
      if (choiceId > 0) {
        listById(choiceId)
          .then((response) => {
            if (response.length == 0) {
              throw new Error('NoChoices');
            }

            const result = buildResponseChoice(response[0]);

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

export function buildResponseChoice(
  choice: ChoiceType,
): RequisitionChoicesResponseType {
  const newChoice: ChoiceResponseType = {
    choice: choice,
    justifyChoice: `${process.env.DOMAIN}choice/${choice.JustifyChoice}/justifyChoice`,
  };

  const response: RequisitionChoicesResponseType = {
    code: 200,
    choice: newChoice,
  };
  return response;
}
