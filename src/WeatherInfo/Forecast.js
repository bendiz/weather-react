import React from "react";
import PropTypes from "prop-types";

function Forecast({ city, date, lat, lon, units, apiKey, iconUrl, description }) {
// In progress
  return (
    <div className="Forecast bottom-section">
      <div className="weather-forecast-one">
        <p className="forecast-text">2°C</p>
        <img
          src={iconUrl}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Sun</p>
      </div>
      <div className="weather-forecast-two">
        <p className="forecast-text">5°C</p>
        <img
          src={iconUrl}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Mon</p>
      </div>
      <div className="weather-forecast-three">
        <p className="forecast-text">6°C</p>
        <img
          src={iconUrl}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Tue</p>
      </div>
      <div className="weather-forecast-four">
        <p className="forecast-text">7°C</p>
        <img
          src={iconUrl}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Wed</p>
      </div>
      <div className="weather-forecast-five">
        <p className="forecast-text">4°C</p>
        <img
          src={iconUrl}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Thu</p>
      </div>
    </div>
  );
}
 Forecast.propTypes = {
    city: PropTypes.string,
    date: PropTypes.object,
    lat: PropTypes.number,
    lon: PropTypes.number,
    units: PropTypes.string,
    apiKey: PropTypes.string,
    iconUrl: PropTypes.string,
    description: PropTypes.string
  };

export default Forecast;
