import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastSingleDay from "./WeatherForecastSingleDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastSingleDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let latitude = props.coord.lat;
    let longtitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
