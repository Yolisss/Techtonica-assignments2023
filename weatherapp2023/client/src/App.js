import "./App.css";
import { useState } from "react";
import WeatherForm from "./components/weatherForm";
import WeatherCard from "./components/weatherCard";

function App() {
  const [city, setCity] = useState("watsonville");
  const [result, setResult] = useState(null);

  // const API_KEY = require(./config)

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    fetch(`http://localhost:8080/api/weather?city=${city}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCity(
          result.name,
          result.icon,
          result.temp,
          result.feels_like,
          result.min,
          result.max,
          result.temp,
          result.humidity,
          result.windspeed
        );
        setResult(result);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadCity();
  };

  return (
    <div className="App">
      <WeatherForm city={city} handleSubmit={handleSubmit} />
      {!result ? (
        <p>Please click the botton to see Data</p>
      ) : (
        <WeatherCard data={result} />
      )}
    </div>
  );
}

export default App;
