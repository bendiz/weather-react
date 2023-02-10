import React from "react";
import PropTypes from "prop-types";

function Forecast({ city, date, lat, lon, units, apiKey }) {
  // const apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  // axios.get(apiUrl).then(handleResponse).catch(handleError);

  // function handleResponse(response) {
  // }
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
 Forecast.propTypes = {
    city: PropTypes.string,
    date: PropTypes.object,
    lat: PropTypes.number,
    lon: PropTypes.number,
    units: PropTypes.string,
    apiKey: PropTypes.string
  };

export default Forecast;
