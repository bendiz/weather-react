import {React, useState} from "react";
import PropTypes from "prop-types";

function DisplayTemperature({temp}) {
    const [unit, setUnit] = useState(`°C`);
    const [temperature, setTemperature] = useState(temp);
    console.log(temperature, temp)
    setTemperature(temp);
    function handleClick(event) {
        temperatureConversion();
    }

    function temperatureConversion() {
        if (unit.includes(`C`)) {
            setUnit(`°F`);
            setTemperature((temp * 1.8) + 32);
        } else if (unit.includes(`F`)) {
            setUnit(`°C`);
            setTemperature((temperature - 32) * 5/9);
        }
    }

    return <div className="temperature-container">
          <link className="current-temp" />
          <h2 id="temperature">{Math.round(temperature)}</h2>
          <a href="#" id="celsius-fahrenheit" onClick={handleClick} title="convert between °F|°C">
            {unit}
          </a>
        </div>
};

DisplayTemperature.propTypes = {
        temp: PropTypes.number.isRequired,
    }

export default DisplayTemperature;