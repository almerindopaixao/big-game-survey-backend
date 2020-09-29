import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tb_game', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('platform').notNullable();

    table
      .integer('genre_id')
      .notNullable()
      .references('id')
      .inTable('tb_genre')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tb_game');
}
