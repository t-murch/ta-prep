
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('todo', (table) => { 
      table.integer('userId'); 
      table.increments('id').primary(); 
      table.string('title'); 
      table.boolean('completed')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema 
    .dropTable('todo')
};
