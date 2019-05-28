const knex = require('knex')({ 
  client: 'pg', 
  connection: { 
    host: 'localhost', 
    user: 'todd',
    password: 'password', 
    database: 'todoapp'
  }
}); 

// const db = require('knex')({ client: 'pg' }); 

const addAllTodos = (todos) => { 
  knex('todo').del(); 
  knex('todo').insert(todos) 
    .then(() => console.log('data inserted'))
}; 

const getAllTodos = () => { 
  return knex.select().from('todo') 
    // .then(() => console.log('data retrieved'))
    .catch((err) => ( err )); 
} 

// VS CODE suggested this func be converted to this, but I don't understand it enough
// to allow it yet. 
// const getAllTodos = async () => { 
//   try {
//     return knex.select().from('todo');
//   }
//   catch (err) {
//     return (err);
//   } 
// } 

module.exports = {addAllTodos, getAllTodos}; 

// then((err, todos) => { 
//   if (err) { 
//     callback(err); 
//   } else { 
//     console.log('all todos from db', todos); 
//     callback(null, todos); 
//   }
// }); 
