import {
  Course,
  Question,
  QuestionObject,
  RequisitionPortableResponseType,
} from '../entities/Portable';
import { updateAndDelete } from '../repositories/PortableRepository';

const errorsFinded: any[] = [1];

export async function update(
  course: Course,
): Promise<RequisitionPortableResponseType> {
  return new Promise<RequisitionPortableResponseType>(
    async (resolve, reject) => {
      if (courseIsDeleted(course)) {
        deleteCourse(course)
          .then((r) => {
            resolve(r);
          })
          .catch((error) => reject(error));
      }
      const questionsToUpdate: QuestionObject[] = [];
      const questionsToDelete: QuestionObject[] = [];
      const questionsToCreate: QuestionObject[] = [];

      for (const question of course.questions) {
        if (questionIsDeleted(question)) {
          questionsToDelete.push(question);
        }

        if (questionIsUpdated(question)) {
          questionsToUpdate.push(question);
        }

        if (questionIsNew(question)) {
          questionsToCreate.push(question);
        }
      }

      if (
        questionsToUpdate.length > 0 ||
        questionsToDelete.length > 0 ||
        questionsToCreate.length > 0
      )
        await deleteAndUpdateQuestions(
          questionsToUpdate,
          questionsToDelete,
          questionsToCreate,
          course,
        )
          .then(() => {
            resolve({
              text: 'Curso atualizado com sucesso',
              code: 200,
            });
          })
          .catch((error) => {
            reject({
              message: 'Erro interno',
              code: 400,
              internalCode: error,
            });
          });

      if (errorsFinded.length > 0) {
        reject({
          message: 'Erro interno',
          code: 400,
          internalCode: 'error',
        });
      } else {
        resolve({
          text: 'Curso atualizado com sucesso',
          code: 200,
        });
      }
    },
  );
}

function courseIsDeleted(course: Course) {
  if (course.deleted) return true;

  return false;
}

function questionIsDeleted(question: QuestionObject) {
  if (question.deleted) return true;

  return false;
}

function questionIsUpdated(question: QuestionObject) {
  if (question.edit) return true;

  return false;
}

function questionIsNew(question: QuestionObject) {
  if (question.new) return true;

  return false;
}

async function deleteCourse(
  course: Course,
): Promise<RequisitionPortableResponseType> {
  return new Promise<RequisitionPortableResponseType>(
    async (resolve, reject) => {},
  );
}

async function deleteAndUpdateQuestions(
  questionsToUpdate: QuestionObject[],
  questionsToDelete: QuestionObject[],
  questionsToCreate: QuestionObject[],
  course: Course,
) {
  updateAndDelete(
    questionsToUpdate,
    questionsToDelete,
    questionsToCreate,
    course,
  );
}

function createErrorResponse() {}
