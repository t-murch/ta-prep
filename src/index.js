import React from "react";
import ReactDOM from "react-dom"; 
import axios from 'axios'; 
import EachTodo from './todoComponent'; 

class App extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      todos: []
    };
  } 
  
  componentDidMount() { 
    axios.get('/api') 
      .then(() => axios.get('/api/todos')) 
      .then(data => { 
        console.log(data.data, 'todos from db');
        this.setState({ 
          todos: data.data
        }) 
      })
      .catch(err => console.log(err)); 
  } 
  
  
  render() { 
    const {todos} = this.state; 
    return ( 
      <>
        <h1>What do you have to-do?</h1> 
        <ul className='listIncomplete'>
          {todos.filter(todo => (todo.completed === false)) 
            .map(todo => <EachTodo todo={todo} /> 
          )}
        </ul> 
        <h1>Completed tasks!</h1> 
        <ul className='listCompleted'> 
          {todos.filter(todo => (todo.completed === true))
            .map(todo => <EachTodo todo={todo} /> 
          )}
        </ul>
        <div>I'm so lonely without anything to complete</div>
      </ >
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
