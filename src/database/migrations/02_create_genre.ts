import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tb_genre', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tb_genre');
}
