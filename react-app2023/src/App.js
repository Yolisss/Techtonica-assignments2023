import logo from "./logo.svg";
import "./App.css";
import DisplayMessage from "./components/DisplayMessage";
import Form from "./components/Form";
import UsersGuess from "./components/UsersGuess";
import WinningNumber from "./components/WinningNumber";

function App() {
  let handleUserGuess = (userGuess) => {
    console.log(userGuess);
  };

  let handleWinningNumber = (winningNumber) => {
    console.log(winningNumber);
  };

  return (
    <div className="App">
      <DisplayMessage greeting="Hello" />
      {/* whenever you're calling the callback for the "on" prop
      that name will start with the word*/}
      <Form onUserGuess={handleUserGuess} />
      <UsersGuess />
      <WinningNumber onWinningNumber={handleWinningNumber} />
    </div>
  );
}

export default App;
