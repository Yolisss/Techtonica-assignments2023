import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);

  const loadData = () => {
    fetch("http://localhost:7010/api/game")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("This is line 11", data.questions);
        setQuestions(data.questions);
        console.log(questions);
      });
  };

  //takes two param
  //callback, dependency arr
  //callback => whatever you want executed as part of the effect
  //dependency arr => if empty, callback will be executed once
  //after the initial render of that component once, and once only
  //if dep arr contains any variables inside of it
  //callback will be executed if anytime any of the elem inside
  //arr change (or have their values changed)

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Container">
      <div className="question-count">
        <span>Question 1</span>/{questions.length}
      </div>
      {questions.map((question, index) => {
        return <QuestionCard key={index} question={question} />;
      })}
    </div>
  );
};

export default Game;
