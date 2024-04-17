// ./src/database/migrations/20240130000004_create_table_courses_questions.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses_questions', (table) => {
    table.integer('id_question').unsigned().nullable();
    table.integer('id_course').unsigned().nullable();

    // Adiciona as chaves estrangeiras
    table.foreign('id_course').references('courses.id');
    table.foreign('id_question').references('questions.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses_questions');
}
