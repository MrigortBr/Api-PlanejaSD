exports.seed = async function (knex): Promise<void> {
  await knex('justify_choice').del();
  await knex('justify_choice').insert([
    { id: 1, title: 'Quais foram as ações feitas?', score: 1 },
    { id: 2, title: 'Por quê?', score: 1 },
    { id: 3, title: 'Quais?', score: 1 },
    { id: 4, title: 'quais instrumentos você já utilizou?', score: 1 },
    {
      id: 5,
      title:
        'Pesquise sobre eles e responda: Quais você identificou no seu município?',
      score: 1,
    },
    { id: 6, title: 'O que poderia estar incluído?', score: 1 },
    { id: 7, title: 'Quais são?', score: 1 },
    { id: 8, title: 'Pesquise a respeito!', score: 1 },
  ]);
};
