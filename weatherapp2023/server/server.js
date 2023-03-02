//adding libraries of express and cors
//you are buying the ikea furniture (comes w instruc)
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
//loading up your env variables
//opening .env file and loading variables into your runtime execution
require("dotenv").config();
//const dataWeather = require("./data");

//creating an instance of express
//main instance running my server
//instance is basically something useable
//telling the computer to build
//the furniture so you can use it
const app = express();

const PORT = 8080;
//telling express to use cors
//app represents the instance we're running
//security caution added to browsers that can deny
//JS from accessing any arbitrary websites
//should only make calls to the same domain name
app.use(cors());
//tells express to handle incoming json as part of
//the body
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// creates an endpoint for the route /api/weather
//https://api.openweathermap.org/data/2.5/weather?q=Watsonville&appid=KEY
//when i create the fetch structure, i want to use this url
// so it can match with the info from data.js
app.get("/api/weather", (req, res) => {
  //recieving request. in query param we're getting city value
  //process: is a reference to the current execution that's running your code (node)
  //any environment var that node has access to, will be accessible via process.env
  //exist by default in terminal
  let key = process.env.API_KEY;
  let city = req.query.city;
  console.log(city);
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  console.log(URL);
  fetch(URL)
    //what code do you want to execute when that fetch is finished
    //.then executes once the fetch has been resolved
    //i get the respond back essentially as a string
    //json converts string to actual object
    //.json returns another promise
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.name;
      result.weather[0].icon;
      result.main.temp;
      result.main.humidity;
      result.wind.speed;
      //it is returning that result obj as a json response
      //that can then be used by the front end
      //result defining new obj from api
      res.json({
        name: result.name,
        icon: result.weather[0].icon,
        temp: result.main.temp,
        humidity: result.main.humidity,
        windspeed: result.wind.speed,
      });
    });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
