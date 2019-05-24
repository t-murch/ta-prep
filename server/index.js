const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require('axios'); 
const db = require('../database/index')

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => { 
  axios 
    .get("https://jsonplaceholder.typicode.com/todos")
    // .then(todos => console.log(todos.data)) 
    .then(todos => db.addAllTodos(todos.data)) 
    .catch(err => console.log('err getting todos from placeholder'))
  res.send('complete')
});


// app.get("/api", (req, res) => { 
//   request("https://jsonplaceholder.typicode.com/todos", (error, response, body) => { 
//     if (error) { 
//       res.status(400).end(`error from json placeholder api`)
//     } 
//     // console.log(body)
//     res.send(body)
//   }) 
// });

app.listen(3000, () => console.log("Now listening on port 3000!"));
