import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

function WeatherDetails({ wind, humidity }) {
  /**
   * Displays the wind and humidity if the user has entered a valid city name - else it renders them as empty strings.
   *
   * @param {Number} wind - The current wind speed - passed from CurrentWeather.
   * @param {Number} humidity - The current humidity - passed from CurrentWeather.
   * @returns {JSX.Element} - Returns the JSX representation.
   */

  const [windReport, setWindReport] = useState(null);
  const [humidityReport, setHumidityReport] = useState(null);

  function setReports(state) {
    if (state) {
      setWindReport(`\u{224B} ${Math.round(wind)}m/s`);
      setHumidityReport(`\u{1F322} ${Math.round(humidity)}%`);
    } else {
      setWindReport(``);
      setHumidityReport(``);
    }
  }

  useEffect(() => {
    wind && humidity ? setReports(true) : setReports(false);
  }, [wind, humidity]);

  return (
    <div className="details">
      <span id="wind-speed">{windReport}</span>
      <span id="humidity">{humidityReport}</span>
    </div>
  );
}

WeatherDetails.propTypes = {
    wind: PropTypes.number,
    humidity: PropTypes.number
  };

export default WeatherDetails;
