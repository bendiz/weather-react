import React from "react";
import PropTypes from "prop-types";
import CurrentCity from "./CurrentCity";
import CurrentDay from "./CurrentDay";
import WeatherDetails from "./WeatherDetails";
import DisplayTemperature from "./DisplayTemperature";

function CurrentWeather({ info }) {
  /**
   * Displays the weather icon, current temperature (if present) and passes params to
     CurrentCity, CurrentDay and WeatherDetails.
   * @param {object} info - An object containing the temperature, city, date, icon, iconURL, description, wind, humidity, lat and lon.
   * @returns {JSX.Element} - Returns the JSX representation. Includes weather icon if it exists (or placeholder), and 
     current temperature if it exists or a placeholder string if not.
   */

  //  Choose a default icon before user search
  const url =
    info.iconUrl ||
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png";

  return (
    <div className="CurrentWeather">
      <div className="current-weather-section">
        <img src={url} alt={info.description} className="weather-icon" />
        <DisplayTemperature temp={info.temperature} />
        <WeatherDetails wind={info.wind} humidity={info.humidity} />
      </div>
      <CurrentCity city={info.city} />
      <CurrentDay date={info.date} />
    </div>
  );
}

CurrentWeather.propTypes = {
  info: PropTypes.object,
};

export default CurrentWeather;
