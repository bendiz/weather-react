import React from "react";
import PropTypes from "prop-types";

function Forecast({ info }) {
  // In progress
  return (
    <div className="Forecast bottom-section">
      <div className="weather-forecast-one">
        <p className="forecast-text">2°C</p>
        <img
          src={info.iconUrl}
          alt={info.description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Sun</p>
      </div>
      <div className="weather-forecast-two">
        <p className="forecast-text">5°C</p>
        <img
          src={info.iconUrl}
          alt={info.description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Mon</p>
      </div>
      <div className="weather-forecast-three">
        <p className="forecast-text">6°C</p>
        <img
          src={info.iconUrl}
          alt={info.description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Tue</p>
      </div>
      <div className="weather-forecast-four">
        <p className="forecast-text">7°C</p>
        <img
          src={info.iconUrl}
          alt={info.description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Wed</p>
      </div>
      <div className="weather-forecast-five">
        <p className="forecast-text">4°C</p>
        <img
          src={info.iconUrl}
          alt={info.description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Thu</p>
      </div>
    </div>
  );
}
Forecast.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Forecast;
