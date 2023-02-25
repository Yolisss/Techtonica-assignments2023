//adding libraries of express and cors
//you are buying the ikea furniture (comes w instructions)
//const express = require("express");
import express from "express";
//const cors = require("cors");
import cors from "cors";
//import your books
import BOOKS from "./books.js";

//creating an instance of express. This will be the main instance running my webserver
//instance is basically something useable
//telling the computer to build the furniture so you can use it
const app = express();

//telling express to use cors; app represents the instance we are running
//"hey express can you use cors"
//security caution added to browsers that can deny JS from accessing
//any arbitrary wesbites
//should only make calls to the same domain name
//
app.use(cors());

//tell express to handle incoming json as part of the body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/books", (req, res) => {
  res.json(BOOKS);
});

app.get("/api/books/:bookID", async (req, res) => {
  //represents the obj that will be returned with the specific
  //data we're asking for
  //params = anytime you have a param in route
  //ex :bookID; in order to access these values;
  //you need to do req.params
  //params used for searching sorting filtering etc
  let requestedBook = req.params.bookID;
  for (let book of BOOKS) {
    if (book.isbn === requestedBook) {
      res.json(book);
    }
  }
});

app.post("/api/books", (req, res) => {
  //client sending data via the body
  //newBook will be a new obj
  let newBook = req.body;

  BOOKS.push(newBook);
  res.json(BOOKS);
});

app.delete("/api/books", (req, res) => {
  //query.params what comes afrer a ? in url
  //they are key value pairs seperated by &
  //if there is more than 1
  //and its always written as a key=value
  //to access those you need req.query
  //bookID=0553120441
  let selectedBook = req.query.bookID;
  for (let index in BOOKS) {
    if (BOOKS[index].isbn === selectedBook) {
      BOOKS.splice(index, 1);
    }
  }
  res.json(BOOKS);
});

//reusable in the future or make it easy to access or update
const PORT = 5003;

//START instance of express
//by default, ports are closed, in order to have it open, you need to have something
//listening to it
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
