exports.seed = async function (knex): Promise<void> {
  await knex('choice_justify_choice').del();

  await knex('choice_justify_choice').insert([
    { id: 1, id_question_choice: 1, id_justify_choice: 1 },
    { id: 4, id_question_choice: 4, id_justify_choice: 2 },
    { id: 2, id_question_choice: 2, id_justify_choice: 2 },
    { id: 3, id_question_choice: 3, id_justify_choice: 3 },
    { id: 5, id_question_choice: 5, id_justify_choice: 3 },
    { id: 6, id_question_choice: 6, id_justify_choice: 2 },
    { id: 7, id_question_choice: 7, id_justify_choice: 4 },
    { id: 8, id_question_choice: 8, id_justify_choice: 5 },
    { id: 9, id_question_choice: 9, id_justify_choice: 3 },
    { id: 10, id_question_choice: 10, id_justify_choice: 6 },
    { id: 11, id_question_choice: 11, id_justify_choice: 3 },
    { id: 12, id_question_choice: 12, id_justify_choice: 2 },
    { id: 13, id_question_choice: 13, id_justify_choice: 3 },
    { id: 14, id_question_choice: 14, id_justify_choice: 7 },
    { id: 15, id_question_choice: 15, id_justify_choice: 8 },
    { id: 16, id_question_choice: 16, id_justify_choice: 3 },
    { id: 17, id_question_choice: 17, id_justify_choice: 2 },
    { id: 18, id_question_choice: 18, id_justify_choice: 3 },
    { id: 19, id_question_choice: 19, id_justify_choice: 2 },
  ]);
};
