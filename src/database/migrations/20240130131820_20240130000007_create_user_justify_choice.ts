// ./src/database/migrations/20240130000005_create_table_user_justify_choice.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_justify_choice', (table) => {
    table.integer('id_user').unsigned().nullable();
    table.text('response').nullable();
    table.integer('id_choice_justify_choice').unsigned().nullable();

    // Adiciona as chaves estrangeiras
    table.foreign('id_user').references('users__registers.id');
    table
      .foreign('id_choice_justify_choice')
      .references('choice_justify_choice.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_justify_choice');
}
