import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('choices', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('score').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('choices');
}
