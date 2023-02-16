import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input type="number" />
        <button>Submit</button>
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
