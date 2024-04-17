// ./src/database/migrations/20240130000006_create_table_user_question_choice.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_question_choice', (table) => {
    table.integer('id_user').unsigned().nullable();
    table.integer('id_question_choice').unsigned().nullable();

    // Adiciona as chaves estrangeiras
    table.foreign('id_user').references('users__registers.id');
    table.foreign('id_question_choice').references('question_choice.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_question_choice');
}
