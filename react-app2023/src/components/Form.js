import React from "react";
import { useState } from "react";
import UsersGuess from "./UsersGuess";

export default function Form(props) {
  let [input, setInput] = useState("");

  let ChangedValue = (event) => {
    //event.target.value is okay to use in this case since
    //react is giving it to you
    setInput(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    //magical way of calling handleUserGuess from app.js
    props.onUserGuess(input);
    // handleUserGuess(input)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={input} onChange={ChangedValue} />
        <button type="submit" onClick={UsersGuess}>
          Submit
        </button>
      </form>
    </div>
  );
}

//create form
//form element with input element inside of it
// input element contain the user's guess
//[guess, setGuess]= useState(""); useState will be written
//before the return statement
// user's guess: number type
//onChange handles the change of input
