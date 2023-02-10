import React from "react";
import PropTypes from "prop-types";
import CurrentCity from "./CurrentCity";
import CurrentDay from "./CurrentDay";
import WeatherDetails from "./WeatherDetails";
import DisplayTemperature from "./DisplayTemperature";

function CurrentWeather({ temp, city, icon, wind, humidity, date }) {
  /**
   * Displays the weather icon, current temperature (if present) and passes params to
     CurrentCity, CurrentDay and WeatherDetails.
   *
     All params passed from Search.
   * @param {Number | undefined} temp - The current temperature. Before/After user query.
   * @param {string | undefined} city - The current city. Before/After user query.
   * @param {string | undefined} icon - The current weather icon. Before/After user query.
   * @param {Number | undefined} wind - The current wind speed. Before/After user query.
   * @param {Number | undefined} humidity - The current humidity level. Before/After user query.
   * @param {Object} date - The current date.
   * 
   * @returns {JSX.Element} - Returns the JSX representation. Includes weather icon if it exists (or placeholder), and 
     current temperature if it exists or a placeholder string if not.
   */

  let weatherIcon = icon || "01d";

  // Prevents night icons for now
  if (weatherIcon.includes("n")) {
    weatherIcon = weatherIcon.substr(0, 2) + "d";
  }

  const url = `/img/weather-icons/${weatherIcon}.png`;
  return (
    <div>
      <div className="current-weather-section">
        <img src={url} alt="Weather Icon" className="weather-icon" />
        <DisplayTemperature temp={temp}/>
      </div>
      <CurrentCity city={city} />
      <CurrentDay date={date} temp={temp} />
      <WeatherDetails wind={wind} humidity={humidity} />
    </div>
  );
}

CurrentWeather.propTypes = {
    temp: PropTypes.number,
    city: PropTypes.string,
    icon: PropTypes.string,
    wind: PropTypes.number,
    humidity: PropTypes.number,
    date: PropTypes.object
  };

export default CurrentWeather;
