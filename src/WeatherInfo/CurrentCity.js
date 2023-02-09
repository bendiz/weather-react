import React from "react";
import PropTypes from "prop-types";

function CurrentCity({ city }) {
  /**
   * Displays the current city if user has searched for it
   *
   * @param {string} city - The current city - passed from CurrentWeather.
   * @returns {JSX.Element} - Returns the JSX representation of the city name.
   */

  CurrentCity.propTypes = {
    city: PropTypes.string.isRequired,
  };

  city = city || "Search for a city";
  return (
    <div className="city-section">
      <h1 className="current-city" id="current-city">
        {city}
      </h1>
    </div>
  );
}

export default CurrentCity;
