//adding libraries of express and cors
//you are buying the ikea furniture (comes w instruc)
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataWeather = require("./data");

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
app.get("/api/weather", (req, res) => {
  res.json(dataWeather);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
