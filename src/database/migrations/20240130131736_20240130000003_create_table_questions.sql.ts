import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('position').notNullable().defaultTo(0);
    table.text('text').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('questions');
}
