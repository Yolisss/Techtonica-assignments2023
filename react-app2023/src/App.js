import logo from "./logo.svg";
import "./App.css";
import DisplayMessage from "./components/DisplayMessage";
import Form from "./components/Form";
import UsersGuess from "./components/UsersGuess";
import WinningNumber from "./components/WinningNumber";
import { useState } from "react";

function App() {
  const [userGuess, setUserGuess] = useState("");

  const [winningNumber, setWinningNumber] = useState("");

  const handleUserGuess = (guess) => {
    setUserGuess(guess);
  };

  const handleWinningNumber = (winning) => {
    setWinningNumber(winning);
  };

  return (
    <div className="App">
      <DisplayMessage greeting="Hello" />
      {/* whenever you're calling the callback for the "on" prop
      that name will start with the word*/}
      <Form onUserGuess={handleUserGuess} />
      <UsersGuess winning={winningNumber} guess={userGuess} />
      <WinningNumber onWinningNumber={handleWinningNumber} />
    </div>
  );
}

export default App;
