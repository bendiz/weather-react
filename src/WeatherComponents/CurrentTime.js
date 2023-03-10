import React from 'react';
import PropTypes from 'prop-types';
import Forecast from './Forecast';

function CurrentTime({ info, forecast, metric }) {
  /**
   * Finds day of the week and displays it on the weather card
   *
   * @param {Object} info - The current date - Passed from CurrentWeather.
   * @returns {JSX.Element} - Checks if the temp is placeholder or real temperature and displays the day
   */

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (info.date !== undefined) {
    const prefix = 0;
    let hours = info.date.getHours();
    let minutes = info.date.getMinutes();

    function time() {
      /**
       * This function updates the existing variables (hours) and (minutes)
       * Defines wether the current time is AM/PM and adds a 0 in front of hours/minutes when it's missing.
       *
       * @returns {void}
       */
      if (hours < 10) {
        hours = `0${hours}`;
        minutes = `${minutes < 10 ? prefix : ''}${minutes}AM`;
      } else if (hours >= 10 && hours < 12) {
        minutes = `${minutes < 10 ? prefix : ''}${minutes}AM`;
      } else if (hours === 12) {
        hours = hours = `0${hours}`;
        minutes = `${minutes < 10 ? prefix : ''}${minutes}PM`;
      } else if (hours > 12 && hours < 22) {
        hours = hours = `0${hours - 12}`;
        minutes = `${minutes < 10 ? prefix : ''}${minutes}PM`;
      } else if (hours >= 22 && hours < 24) {
        hours = hours = `${hours - 12}`;
        minutes = `${minutes < 10 ? prefix : ''}${minutes}PM`;
      } else if (hours === 24) {
        hours = `${hours - 12}`;
        minutes = `${minutes < 10 ? prefix : ''}${minutes}AM`;
      }
    }
    time();

    if (info.date !== undefined) {
      return (
        <div className="CurrentTime">
          <h3 className="mb-0">Today</h3>
          <p className="mb-0 dayAndTime">
            {hours}:{minutes}
          </p>
          <Forecast
            info={info}
            forecast={forecast}
            daysOfWeek={daysOfWeek}
            metric={metric}
          />
        </div>
      );
    }
  }
}

CurrentTime.propTypes = {
  info: PropTypes.object,
  forecast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  metric: PropTypes.string,
};

export default CurrentTime;
