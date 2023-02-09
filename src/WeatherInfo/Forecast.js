import React from "react";
import PropTypes from "prop-types";

function Forecast({ city, apiKey }) {
  // const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  Forecast.propTypes = {
    city: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
  };

  return (
    <div className="bottom-section">
      <div className="weather-forecast-one">
        <p className="forecast-text">2°C</p>
        <img
          src="/img/weather-icons/09d.png"
          alt="Raining"
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Sun</p>
      </div>
      <div className="weather-forecast-two">
        <p className="forecast-text">5°C</p>
        <img
          src="/img/weather-icons/03d.png"
          alt="Snow"
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Mon</p>
      </div>
      <div className="weather-forecast-three">
        <p className="forecast-text">6°C</p>
        <img
          src="/img/weather-icons/01d.png"
          alt="Sunny, but cloudy."
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Tue</p>
      </div>
      <div className="weather-forecast-four">
        <p className="forecast-text">7°C</p>
        <img
          src="/img/weather-icons/03d.png"
          alt="Partly Cloudly"
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Wed</p>
      </div>
      <div className="weather-forecast-five">
        <p className="forecast-text">4°C</p>
        <img
          src="/img/weather-icons/02d.png"
          alt="Cloudy"
          className="weather-forecast-icon"
        />
        <p className="forecast-text">Thu</p>
      </div>
    </div>
  );
}

export default Forecast;
