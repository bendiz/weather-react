import { React } from 'react';
import PropTypes from 'prop-types';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WeatherDetails({ wind, humidity }) {
  /**
   * Displays the wind and humidity if the user has entered a valid city name - else it renders them as empty strings.
   *
   * @param {Number} wind - The current wind speed - passed from CurrentWeather.
   * @param {Number} humidity - The current humidity - passed from CurrentWeather.
   * @returns {JSX.Element} - Returns the JSX representation.
   */

  return (
    <div className="WeatherDetails details">
      <span id="wind-speed">
        <FontAwesomeIcon icon={faWind} />
        &nbsp;{Math.round(wind)}m/s
      </span>
      <span id="humidity">
        <FontAwesomeIcon icon={faDroplet} />
        &nbsp;{Math.round(humidity)}%
      </span>
    </div>
  );
}

WeatherDetails.propTypes = {
  wind: PropTypes.number,
  humidity: PropTypes.number,
};

export default WeatherDetails;
