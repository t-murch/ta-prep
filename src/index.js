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
      .then(data => { 
        console.log(data.data)
        this.setState({ 
          todos: data.data
        }); 
      })
      .catch(err => console.log(err)
    )
  } 
  
  
  render() { 

    return ( 
      <>
        <h1>What do you have to-do?</h1> 
        <ul className='list'>
          {this.state.todos.filter(todo => (todo.completed === false)) 
            .map(todo => <EachTodo todo={todo} /> 
          )}
        </ul>
        <div>I'm so lonely without anything to complete</div>
      </ >
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
