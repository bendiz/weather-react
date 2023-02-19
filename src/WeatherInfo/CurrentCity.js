import React from "react";
import PropTypes from "prop-types";

function CurrentCity({ city }) {
  /**
   * Displays the current city if user has searched for it
   *
   * @param {string} city - The current city - passed from CurrentWeather.
   * @returns {JSX.Element} - Returns the JSX representation of the city name.
   */

  return (
    <div className="CurrentCity city-section">
      <h1 className="current-city mb-0" id="current-city">
        {city}
      </h1>
    </div>
  );
}

CurrentCity.propTypes = {
  city: PropTypes.string,
};

export default CurrentCity;
