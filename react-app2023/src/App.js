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

  return (
    <div className="App">
      <DisplayMessage greeting="Hello" />
      <Form onUserGuess={handleUserGuess} />
      <UsersGuess />
      <WinningNumber />
    </div>
  );
}

export default App;
