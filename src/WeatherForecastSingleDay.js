import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastSingleDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function getDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return ` ${days[day]}`;
  }

  return (
    <div className="WeatherForecastSingleDay">
      <div className="WeatherForecast-day">{getDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
