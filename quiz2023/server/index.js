import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

// For testing my API I saving one response in a .js file
//import fakedata from "./fakedata.js";

const app = express();
const PORT = 7001;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica Server for a Game");
});

// Make the GET request for the GAME Api for grabbing all the questions

// //hardcode the game response for testing reasons to don't saturate my API call.
app.get("/api/game", (req, res) => {
  let URL = `https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple`;
  //fetch(URL);
  console.log(URL);
  //what code do you want to execute when that fetch is finished
  //.then executes once the fetch has been resolved
  //i get the respond back essentially as a string
  //json converts string to actual object
  //.json returns another promise
  fetch(URL)
    //what code do you want to execute when that fetch is finished
    //.then executes once the fetch has been resolved
    //i get the respond back essentially as a string
    //json converts string to actual object
    //.json returns another promise
    //parsing =
    //json is looking at the string response from the URL
    //and parses(converting) the string to an obj
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results;
      //it is returning that result obj as a json response
      //that can then be used by the front end
      //result defining new obj from api
      res.json({
        questions: data.results,
      });
    });
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
