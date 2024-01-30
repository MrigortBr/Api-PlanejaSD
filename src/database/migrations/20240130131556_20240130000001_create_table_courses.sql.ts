// ./src/database/migrations/20240130000001_create_table_courses.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.specificType('image', 'bytea');
    // Adicione mais colunas conforme necessário
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses');
}
