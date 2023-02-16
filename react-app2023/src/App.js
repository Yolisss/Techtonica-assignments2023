import logo from "./logo.svg";
import "./App.css";
import DisplayMessage from "./components/DisplayMessage";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <DisplayMessage greeting="Hello" />
      <Form />
    </div>
  );
}

export default App;
