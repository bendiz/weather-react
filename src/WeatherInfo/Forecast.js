import React from "react";
import PropTypes from "prop-types";

function Forecast({ info, forecast, daysOfWeek, metric }) {
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

  if (forecast[0] !== undefined) {
    return (
      <div className="Forecast bottom-section">
        <div className="weather-forecast-one">
          <p className="forecast-text">
            {metric.includes("C")
              ? Math.round(forecast[list[0]].temperature.day)
              : Math.round(forecast[list[0]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[0]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text">{daysOfWeek[list[0]].slice(0, 3)}</p>
        </div>
        <div className="weather-forecast-two">
          <p className="forecast-text">
            {metric.includes("C")
              ? Math.round(forecast[list[1]].temperature.day)
              : Math.round(forecast[list[1]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[1]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text">{daysOfWeek[list[1]].slice(0, 3)}</p>
        </div>
        <div className="weather-forecast-three">
          <p className="forecast-text">
            {metric.includes("C")
              ? Math.round(forecast[list[2]].temperature.day)
              : Math.round(forecast[list[2]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[2]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text">{daysOfWeek[list[2]].slice(0, 3)}</p>
        </div>
        <div className="weather-forecast-four">
          <p className="forecast-text">
            {metric.includes("C")
              ? Math.round(forecast[list[3]].temperature.day)
              : Math.round(forecast[list[3]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[3]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text">{daysOfWeek[list[3]].slice(0, 3)}</p>
        </div>
        <div className="weather-forecast-five">
          <p className="forecast-text">
            {metric.includes("C")
              ? Math.round(forecast[list[4]].temperature.day)
              : Math.round(forecast[list[4]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[4]].condition.icon_url}
            alt={description}
            className="weather-forecast-icon"
          />
          <p className="forecast-text">{daysOfWeek[list[4]].slice(0, 3)}</p>
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  info: PropTypes.object,
  forecast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  daysOfWeek: PropTypes.array,
  metric: PropTypes.string,
};

export default Forecast;
