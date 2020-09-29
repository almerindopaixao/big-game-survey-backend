import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tb_record', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table
      .timestamp('moment')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();

    table
      .integer('game_id')
      .notNullable()
      .references('id')
      .inTable('tb_game')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tb_record');
}
