import React from "react";
import PropTypes from "prop-types";
import CurrentCity from "./CurrentCity";
import CurrentDay from "./CurrentDay";
import WeatherDetails from "./WeatherDetails";
import DisplayTemperature from "./DisplayTemperature";

function CurrentWeather({ temp, city, description, wind, humidity, date, iconUrl }) {
  /**
   * Displays the weather icon, current temperature (if present) and passes params to
     CurrentCity, CurrentDay and WeatherDetails.
   *
     All params passed from Search.
   * @param {Number | undefined} temp - The current temperature. Before/After user query.
   * @param {string | undefined} city - The current city. Before/After user query.
   * @param {string | undefined} description - The current weather description. Before/After user query
   * @param {Number | undefined} wind - The current wind speed. Before/After user query.
   * @param {Number | undefined} humidity - The current humidity level. Before/After user query.
   * @param {Object} date - The current date.
   * @param {string | undefined} iconUrl - The URL to the weather icon corresponding to the current weather. Before/after user query.
   * 
   * @returns {JSX.Element} - Returns the JSX representation. Includes weather icon if it exists (or placeholder), and 
     current temperature if it exists or a placeholder string if not.
   */

  //  Choose a default icon before user search
  const url = iconUrl || "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png";
  return (
    <div className="CurrentWeather">
      <div className="current-weather-section">
        <img src={url} alt={description} className="weather-icon" />
        <DisplayTemperature temp={temp}/>
        <WeatherDetails wind={wind} humidity={humidity} />
      </div>
      <CurrentCity city={city} />
      <CurrentDay date={date}/>
    </div>
  );
}

CurrentWeather.propTypes = {
    temp: PropTypes.number,
    city: PropTypes.string,
    description: PropTypes.string,
    wind: PropTypes.number,
    humidity: PropTypes.number,
    date: PropTypes.oneOfType([
      PropTypes.null,
      PropTypes.number
    ]),
    iconUrl: PropTypes.string
  };

export default CurrentWeather;
