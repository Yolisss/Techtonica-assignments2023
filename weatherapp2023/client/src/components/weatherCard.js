const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div className="result">
        <p>
          City: <span className="data">{props.data.name}</span>
        </p>
        {/* <p>
          Description:{" "}
          <span className="data">{props.data.weather[0].description}</span>
        </p> */}
        <img
          src={`http://openweathermap.org/img/wn/${props.data.icon}@4x.png`}
          alt={"Icon from Open Weather Api"}
        />
        <p>
          Temperature:{" "}
          <span className="data">
            {props.data.temp} <sup>o</sup>F
          </span>
        </p>
        <p>
          Humidity:{" "}
          <span className="data">
            {/* {props.data.main.feels_like} <sup>o</sup>F */}
            {props.data.humidity}
          </span>
        </p>
        <p>
          Windspeed:{" "}
          <span className="data">
            {/* {props.data.main.feels_like} <sup>o</sup>F */}
            {props.data.windspeed}
            {props.data.feels_like}
            {props.data.min}
            {props.data.max}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
