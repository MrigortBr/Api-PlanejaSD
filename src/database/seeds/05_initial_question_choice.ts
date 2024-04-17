exports.seed = async function (knex): Promise<void> {
  await knex('question_choice').del();
  await knex('question_choice').insert([
    { id: 1, id_question: 1, id_choice: 1 },
    { id: 2, id_question: 1, id_choice: 2 },
    { id: 3, id_question: 2, id_choice: 1 },
    { id: 4, id_question: 2, id_choice: 2 },
    { id: 5, id_question: 4, id_choice: 1 },
    { id: 6, id_question: 4, id_choice: 2 },
    { id: 7, id_question: 8, id_choice: 1 },
    { id: 8, id_question: 8, id_choice: 2 },
    { id: 9, id_question: 8, id_choice: 1 },
    { id: 10, id_question: 8, id_choice: 2 },
    { id: 11, id_question: 8, id_choice: 1 },
    { id: 12, id_question: 8, id_choice: 2 },
    { id: 13, id_question: 8, id_choice: 1 },
    { id: 14, id_question: 8, id_choice: 1 },
    { id: 15, id_question: 8, id_choice: 2 },
    { id: 16, id_question: 8, id_choice: 1 },
    { id: 17, id_question: 8, id_choice: 2 },
    { id: 18, id_question: 8, id_choice: 1 },
    { id: 19, id_question: 8, id_choice: 2 },
  ]);
};
