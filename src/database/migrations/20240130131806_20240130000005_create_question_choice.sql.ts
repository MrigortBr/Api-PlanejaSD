// ./src/database/migrations/20240130000003_create_table_question_choice.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('question_choice', (table) => {
    table.increments('id').primary();
    table.integer('id_question').unsigned().nullable();
    table.integer('id_choice').unsigned().nullable();

    // Adiciona as chaves estrangeiras
    table.foreign('id_question').references('questions.id');
    table.foreign('id_choice').references('choices.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('question_choice');
}
