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
    hours = date.getHours();
    minutes = date.getMinutes();
    const prefix = 0;

    function time() {
      if (hours < 10) {
        hours = `0${hours}`;
        minutes = `${minutes < 10 ? prefix : ""}${minutes}AM`;
      } else if (hours >= 10 && hours < 12) {
        minutes = `${minutes < 10 ? prefix : ""}${minutes}AM`;
      } else if (hours === 12) {
        hours = hours = `0${hours}`;
        minutes = `${minutes < 10 ? prefix : ""}${minutes}PM`;
      } else if (hours > 12 && hours < 24) {
        hours = hours = `${hours - 12}`;
        minutes = `${minutes < 10 ? prefix : ""}${minutes}PM`;
      } else if (hours === 24) {
        hours = `${hours - 12}`;
        minutes = `${minutes < 10 ? prefix : ""}${minutes}AM`;
      }
    }
    time();

    if (date !== undefined) {
      return (
        <div className="CurrentTime">
          <h3 className="mb-0">{day}</h3>
          <p className="mb-0 dayAndTime">
            {hours}:{minutes}
          </p>
        </div>
      );
    }
  }
}

CurrentDay.propTypes = {
  date: PropTypes.number,
};

export default CurrentDay;
