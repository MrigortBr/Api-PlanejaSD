import { JustifyChoiceType } from '../entities/JustifyChoice';
import { errors } from '../entities/errors';
import { listJustifyChoiceById } from '../repositories/JustifyChoiceRepository';

export async function listJustifyById(
  justifyId: number,
): Promise<JustifyChoiceType> {
  return new Promise<JustifyChoiceType>(async (resolve, reject) => {
    if (justifyId > 0) {
      await listJustifyChoiceById(justifyId)
        .then(async (response) => {
          if (response.length == 0) {
            throw new Error('NoJustify');
          }
          resolve(response[0]);
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
  });
}
