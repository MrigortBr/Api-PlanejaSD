exports.seed = function (knex) {
  return knex('courses')
    .del()
    .then(function () {
      return knex('courses').insert([
        { id: 1, name: 'Curso Principal', image: null },
      ]);
    });
};
