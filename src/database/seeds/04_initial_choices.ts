exports.seed = async function (knex): Promise<void> {
  await knex('choices').del();

  await knex('choices').insert([
    { id: 1, title: 'Sim', score: 1 },
    { id: 2, title: 'Não', score: 0 },
  ]);
};
