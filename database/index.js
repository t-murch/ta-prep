const knex = require('knex')({ 
  client: 'pg', 
  connection: { 
    host: 'localhost', 
    user: 'todd',
    password: 'password', 
    database: 'todoapp'
  }
}); 

const db = require('knex')({ client: 'pg' }); 

const getAllTodos = callback => { 
  knex.raw('select * from todo').then((err, todos) => { 
    if (err) { 
      callback(err); 
    } else { 
      console.log('all todos from db', todos); 
      callback(null, todos); 
    }
  }); 
}

module.exports = knex; 