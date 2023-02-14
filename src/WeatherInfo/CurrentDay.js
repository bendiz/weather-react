import React from "react";
import PropTypes from "prop-types";

function CurrentDay({ date }) {
  /**
   * Finds day of the week and displays it on the weather card
   *
   * @param {Object} date - The current date - Passed from CurrentWeather.
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

  let day;
  let hours;
  let minutes;

  if (date !== undefined) {
    day = daysOfWeek[date.getDay()];
    minutes = date.getMinutes();
    hours = date.getHours();
    minutes = date.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours > 12 && hours < 22) {
      hours = `0${hours - 12}`;
    } else if (hours === 12) {
      hours = `0${hours - 12}`;
    } else if (hours > 22) {
      hours = `${hours - 12}`;
    }
  }

  if (date !== undefined) {
    return (
      <div className="CurrentDay">
        <h3 className="mb-0">{day}</h3>
        <p className="mb-0 dayAndTime">
          {hours}:{minutes}
          {hours > 12 ? `PM` : `AM`}
        </p>
      </div>
    );
  }
}

CurrentDay.propTypes = {
  date: PropTypes.number,
};

export default CurrentDay;
