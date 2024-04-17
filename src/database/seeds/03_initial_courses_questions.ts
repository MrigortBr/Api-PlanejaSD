exports.seed = async function (knex): Promise<void> {
  await knex('courses_questions').del();

  await knex('courses_questions').insert([
    { id_question: 1, id_course: 1 },
    { id_question: 2, id_course: 1 },
    { id_question: 3, id_course: 1 },
    { id_question: 4, id_course: 1 },
    { id_question: 5, id_course: 1 },
    { id_question: 6, id_course: 1 },
    { id_question: 7, id_course: 1 },
    { id_question: 8, id_course: 1 },
    { id_question: 9, id_course: 1 },
  ]);
};
