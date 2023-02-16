import React from "react";
import PropTypes from "prop-types";

function Forecast({ info, forecast, daysOfWeek }) {
  const list = [];
  let day;
  const description = info.description || "";
  info.date === undefined ? (day = "") : (day = info.date.getDay() - 1);

  if (info.date !== undefined) {
    while (list.length < 5) {
      day++;
      if (day < 7) {
        list.push(day);
      } else if (day === 7) {
        day = 0;
        list.push(day);
      }
    }
  }
  console.log(daysOfWeek[list[0]]);

  if (forecast[0] !== undefined) {
    return (
      <div className="Forecast bottom-section">
        <div className="weather-forecast-one">
          <p className="forecast-text">
            {Math.round(forecast[list[0]].temperature.day)}°C
          </p>
          <img
            src={forecast[list[0]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text"></p>
        </div>
        <div className="weather-forecast-two">
          <p className="forecast-text">
            {Math.round(forecast[list[1]].temperature.day)}°C
          </p>
          <img
            src={forecast[list[1]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text"></p>
        </div>
        <div className="weather-forecast-three">
          <p className="forecast-text">
            {Math.round(forecast[list[2]].temperature.day)}°C
          </p>
          <img
            src={forecast[list[2]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text"></p>
        </div>
        <div className="weather-forecast-four">
          <p className="forecast-text">
            {Math.round(forecast[list[3]].temperature.day)}°C
          </p>
          <img
            src={forecast[list[3]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text"></p>
        </div>
        <div className="weather-forecast-five">
          <p className="forecast-text">
            {Math.round(forecast[list[4]].temperature.day)}°C
          </p>
          <img
            src={forecast[list[4]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text"></p>
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  info: PropTypes.object,
  forecast: PropTypes.array,
  daysOfWeek: PropTypes.array,
};

export default Forecast;
