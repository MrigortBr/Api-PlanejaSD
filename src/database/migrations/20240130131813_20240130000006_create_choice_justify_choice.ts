// ./src/database/migrations/20240130000002_create_table_choice_justify_choice.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('choice_justify_choice', (table) => {
    table.increments('id').primary();
    table.integer('id_question_choice').unsigned().nullable();
    table.integer('id_justify_choice').unsigned().nullable();

    // Adiciona as chaves estrangeiras
    table.foreign('id_question_choice').references('question_choice.id');
    table.foreign('id_justify_choice').references('justify_choice.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('choice_justify_choice');
}
