import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CurrentCity from './CurrentCity';
import CurrentTime from './CurrentTime';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CurrentWeather({ info, forecast }) {
  /**
   * Displays the weather icon, current temperature (if present) and passes params to
     CurrentCity, CurrentDay and WeatherDetails.
   * @param {object} info - An object containing the temperature, city, date, icon, iconURL, description, wind, humidity, lat and lon.
     @param {object} forecast
   * @returns {JSX.Element} - Returns the JSX representation. Includes weather icon if it exists (or placeholder), and 
     current temperature if it exists or a placeholder string if not.
   */

  //  Choose a default icon before user search
  const temp = info.temperature;
  const url = info.iconUrl;
  const [unit, setUnit] = useState(`°C`);
  const [temperature, setTemperature] = useState(temp);
  useEffect(() => {
    setTemperature(temp);
  }, [temp]);

  function temperatureConversion() {
    if (unit.includes(`C`)) {
      setUnit(`°F`);
      setTemperature(temp * 1.8 + 32);
    } else if (unit.includes(`F`)) {
      setUnit(`°C`);
      setTemperature(((temperature - 32) * 5) / 9);
    }
  }

  function handleClick(event) {
    temperatureConversion();
  }

  if (temperature !== undefined) {
    return (
      <div className="CurrentWeather">
        <div className="current-weather-section">
          <img src={url} alt={info.description} className="weather-icon" />
          <div className="DisplayTemperature temperature-container">
            <link className="current-temp" />
            <h2 id="temperature">{Math.round(temperature)}</h2>
            <a
              href="#"
              id="celsius-fahrenheit"
              onClick={handleClick}
              title="convert between °F|°C"
            >
              {unit}
            </a>
          </div>
          <div className="WeatherDetails details">
            <span id="wind-speed">
              <FontAwesomeIcon icon={faWind} />
              &nbsp;{Math.round(info.wind)}m/s
            </span>
            <span id="humidity">
              <FontAwesomeIcon icon={faDroplet} />
              &nbsp;{Math.round(info.humidity)}%
            </span>
          </div>
        </div>
        <CurrentCity city={info.city} />
        <CurrentTime info={info} forecast={forecast} metric={unit} />
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  info: PropTypes.object,
  forecast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default CurrentWeather;
