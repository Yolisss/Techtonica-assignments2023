import React from "react";
import { useState } from "react";
import Form from "./Form";
import WinningNumber from "./WinningNumber";

export default function UsersGuess(props) {
  //let [guess, setGuess] = useState("");

  let CompareGuesses = () => {
    if (props.guess > props.winning) {
      return "Ooff, so close. Guess lower";
      //console.log("Ooff, so close. Guess lower");
    } else if (props.guess < props.winning) {
      return "Ooff, so close. Guess higher";
      //console.log("Ooff, so close. Guess higher");
    } else {
      return "Winner, Winner, Chicken Dinner!";
      //console.log("Winner, Winner, Chicken Dinner!");
    }
  };
  return <div>{CompareGuesses()}</div>;
}

//check if rand num being generated
//2. if it is not generated why, do i need to call the func somehwere
//3. when comparing winning num and users guess,
//check if onsubmit is working fine

//look into props
