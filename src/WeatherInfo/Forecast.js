import React from 'react';
import PropTypes from 'prop-types';

function Forecast({ info, forecast, daysOfWeek, metric }) {
  const list = [];
  let day;
  const description = info.description || '';
  info.date === undefined ? (day = '') : (day = info.date.getDay() - 1);

  if (info.date !== undefined) {
    while (list.length < 5) {
      day++;
      if (day < 7) {
        list.push(day);
      } else if (day === 7) {
        day = 0;
        list.push(day);
      }
    }
  }
  console.log(list);

  const forecastElements = list.map((n) => {
    return (
      <div className="weather-forecast-one" key={n}>
        <p className="forecast-text">
          {metric.includes('C')
            ? Math.round(forecast[list[n]].temperature.day)
            : Math.round(forecast[list[n]].temperature.day * 1.8 + 32)}{' '}
          {metric}
        </p>
        <img
          src={forecast[list[n]].condition.icon_url}
          alt={description}
          className="weather-forecast-icon"
        />
        <p className="forecast-text">{daysOfWeek[list[n]].slice(0, 3)}</p>
      </div>
    );
  });

  if (forecast[0] !== undefined) {
    return <div className="Forecast bottom-section">{forecastElements}</div>;
  }
}

Forecast.propTypes = {
  info: PropTypes.object,
  forecast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  daysOfWeek: PropTypes.array,
  metric: PropTypes.string,
};

export default Forecast;
