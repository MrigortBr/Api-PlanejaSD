import { Knex } from 'knex';
import connection from '../database/connection';
import {
  Course,
  Question,
  QuestionObject,
  ResponseCreate,
  JustifyChoice,
  Choice,
} from '../entities/Portable';

export async function updateAndDelete(
  questionsToUpdate: QuestionObject[],
  questionsToDelete: QuestionObject[],
  questionsToCreate: QuestionObject[],
  course: Course,
): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await connection.transaction(async (trx) => {
        for (const questions of questionsToCreate) {
          await createQuestion(questions.question, trx, course).catch(
            (error) => {
              throw new Error(error);
            },
          );

          for (const choices of questions.choices) {
            await createChoice(choices.choice, trx, questions.question).catch(
              (error) => {
                throw new Error(error);
              },
            );

            await createJustifyChoice(
              choices.justifyChoice,
              trx,
              choices.choice,
            ).catch((error) => {
              throw new Error(error);
            });
          }
        }

        for (const questions of questionsToUpdate) {
          await updateQuestion(questions.question, trx).catch((error) => {
            throw new Error(error);
          });
          for (const choice of questions.choices) {
            if (choice.choice.id) {
              await updateChoice(choice.choice, trx).catch((error) => {
                throw new Error(error);
              });
            } else {
              await createChoice(choice.choice, trx, questions.question).catch(
                (error) => {
                  throw new Error(error);
                },
              );
            }

            if (choice.justifyChoice.id) {
              await updateJustifyChoice(choice.justifyChoice, trx).catch(
                (error) => {
                  throw new Error(error);
                },
              );
            } else {
              await createJustifyChoice(
                choice.justifyChoice,
                trx,
                choice.choice,
              ).catch((error) => {
                throw new Error(error);
              });
            }
          }
        }

        for (const questions of questionsToDelete) {
          await deleteQuestion(questions.question, trx, course).catch(
            (error) => {
              throw new Error(error);
            },
          );
        }
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function createJustifyChoice(
  justifyChoice: JustifyChoice,
  trx: Knex.Transaction<any, any[]>,
  choice: Choice,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const idJustifyChoice: ResponseCreate[] = await trx('justify_choice')
        .returning('id')
        .insert({
          title: justifyChoice.title,
          score: justifyChoice.score || 0,
        });
      justifyChoice.id = idJustifyChoice[0].id;

      const idChoiceJustify: ResponseCreate[] = await trx(
        'choice_justify_choice',
      )
        .returning('id')
        .insert({
          id_question_choice: choice.id,
          id_justify_choice: justifyChoice.id,
        });

      justifyChoice.id = idChoiceJustify[0].id;
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function createChoice(
  choice: Choice,
  trx: Knex.Transaction<any, any[]>,
  question: Question,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const idChoice: ResponseCreate[] = await trx('choices')
        .returning('id')
        .insert({ title: choice.title, score: choice.score || 0 });
      choice.id = idChoice[0].id;

      const idQuestionChoice: ResponseCreate[] = await trx('question_choice')
        .returning('id')
        .insert({
          id_question: question.id,
          id_choice: choice.id,
        });

      choice.id = idQuestionChoice[0].id;

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function createQuestion(
  question: Question,
  trx: Knex.Transaction<any, any[]>,
  course: Course,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const resultCreate: ResponseCreate[] = await trx('questions')
        .returning('id')
        .insert({
          title: question.title,
          text: question.text,
          position: question.position,
        });
      question.id = resultCreate[0].id;
      await trx('courses_questions').insert({
        id_question: question.id,
        id_course: course.id,
      });

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function updateQuestion(
  question: Question,
  trx: Knex.Transaction<any, any[]>,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await trx('questions').where({ id: question.id }).update({
        title: question.title,
        position: question.position,
        text: question.text,
      });

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function updateChoice(choice: Choice, trx: Knex.Transaction<any, any[]>) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      if (choice.deleted) {
        await trx('choices').where({ id: choice.id }).delete();
      } else {
        await trx('choices')
          .where({ id: choice.id })
          .update({
            title: choice.title,
            score: choice.score || 0,
          });
      }

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function updateJustifyChoice(
  justifyChoice: JustifyChoice,
  trx: Knex.Transaction<any, any[]>,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await trx('justify_choice')
        .where({ id: justifyChoice.id })
        .update({
          title: justifyChoice.title,
          score: justifyChoice.score || 0,
        });

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

async function deleteQuestion(
  question: Question,
  trx: Knex.Transaction<any, any[]>,
  course: Course,
) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await trx('courses_questions')
        .where({ id_question: question.id, id_course: course.id })
        .delete();

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}
