
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('todo', (table) => { 
      table.boolean('completed')
      table.increments('id').primary(); 
      table.string('title'); 
      table.integer('userId'); 

      table.timestamps(true, true); 
    })
};

exports.down = function(knex, Promise) {
  return knex.schema 
    .dropTable('todo')
};
