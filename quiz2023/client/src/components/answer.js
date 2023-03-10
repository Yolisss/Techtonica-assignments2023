import { useEffect, useState } from "react";
import QuestionCard from "./questioncard";

import React from "react";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const Answer = (props) => {
  const [answer, setAnswer] = useState([]);

  //because props.correct is a primitives, we're making a copy
  //and we're putting that copy inside of that answer variable
  //so both LHS and RHS have the same value
  //primitives are always copied
  let correctAnswer = props.correct;
  //complex objects such as arrays objects
  //those are passed by reference

  //prop.incorrect is an array; defined and managed by
  //questionCard
  //whenever you do an assignment with a complex data type
  //you will not making a copy of that value
  //you will be making a copy of its reference
  //reference = unique id (internal to JS)
  //
  let fakeArray = props.incorrect;

  let array = [...props.incorrect];
  console.log("mycorrectanswers", correctAnswer);
  //console.log("mywronganswers", array);

  array.push(correctAnswer);
  console.log("my new answer", array);

  //QUESTION FOR VLAD
  //was trying to add this in a var however it returned an empty arr
  //array.push(correctAnswer);

  useEffect(() => {}, [props.correct, props.incorrect]);
  // console.log(array);
  const randomize = () => {};

  return <h1>answers</h1>;
};

export default Answer;
