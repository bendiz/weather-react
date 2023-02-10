import React from "react";
import PropTypes from "prop-types";

function CurrentDay({ date, temp }) {
  /**
   * Finds day of the week and displays it on the weather card
   *
   * @param {Object} date - The current date - Passed from CurrentWeather.
   * @param {string | number} temp - The current temperature or an empty string placeholder - Passed from CurrentWeather.
   * @returns {JSX.Element} - Checks if the temp is placeholder or real temperature and displays the day
   */

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[date.getDay()];

  return (
    <h3 className="current-day" id="current-day">
      {temp !== "" ? day : ""}
    </h3>
  );
}

 CurrentDay.propTypes = {
    date: PropTypes.object,
    temp: PropTypes.number
  };

export default CurrentDay;
