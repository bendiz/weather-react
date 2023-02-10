import React from "react";
import PropTypes from "prop-types";

function DisplayTemperature({temp}) {
    DisplayTemperature.propTypes = {
        temp: PropTypes.number.isRequired,
    }
    return <div className="temperature-container">
          <link className="current-temp" />
          <h2 id="temperature">{temp}</h2>
          <a href="/" id="celsius-fahrenheit">
            {temp !== "" ? `°C` : temp}
          </a>
        </div>
};

export default DisplayTemperature;