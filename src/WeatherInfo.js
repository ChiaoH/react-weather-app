import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize font-weight-bold">
              {props.data.description}
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div>
              <WeatherIcon code={props.data.icon} size={56} />
            </div>
            <CurrentTemp celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
