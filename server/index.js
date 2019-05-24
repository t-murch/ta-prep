const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require('axios'); 

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => { 
  request("https://jsonplaceholder.typicode.com/todos", (error, response, body) => { 
    if (error) { 
      res.status(400).end(`error from json placeholder api`)
    } 
    // console.log(body)
    res.send(body)
  }) 
});

app.listen(3000, () => console.log("Now listening on port 3000!"));

// app.get("/api", (req, res) => { 
//   request("https://jsonplaceholder.typicode.com/todos", (error, response, body) => { 
//     if (error) { 
//       res.status(400).end(`error from json placeholder api`)
//     } 
//     // console.log(body)
//     res.send(body)
//   }) 
// });