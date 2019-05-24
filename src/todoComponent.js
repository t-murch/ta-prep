import React from 'react'; 
import ReactDom from 'react-dom'; 

const EachTodo = ({ todo }) => ( 
  <li>{ todo.title }</li>
); 

export default EachTodo; 