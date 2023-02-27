import { React } from 'react';
import PropTypes from 'prop-types';
import 'animate.css';

function Forecast({ info, forecast, daysOfWeek, metric }) {
  const list = [];
  let day;
  info.date === undefined ? (day = '') : (day = info.date.getDay() - 1);
  let forecastElements = '';

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
  if (forecast[0] !== undefined) {
    forecastElements = list.map((n) => {
      return (
        <div className="weather-forecast-one" key={n}>
          <p className="forecast-text">
            {metric.includes('C')
              ? Math.round(forecast[list[n - 1]].temperature.day)
              : Math.round(forecast[list[n - 1]].temperature.day * 1.8 + 32)}
            {metric}
          </p>
          <img
            src={forecast[list[n - 1]].condition.icon_url}
            alt={forecast[list[n - 1]].condition.description}
            className="weather-forecast-icon animate__bounceIn animate__delay-5s"
          />
          <p className="forecast-text animate__bounceInLeft">
            {daysOfWeek[list[n - 1]].slice(0, 3)}
          </p>
        </div>
      );
    });
  }

  if (forecast !== undefined) {
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
