import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";

function DisplayTemperature({temp}) {
    const [unit, setUnit] = useState(`°C`);
    const [temperature, setTemperature] = useState(temp);
     useEffect(() => {
        setTemperature(temp);
    }, [temp]);

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

    return <div className="DisplayTemperature temperature-container">
          <link className="current-temp" />
          <h2 id="temperature">{temperature !== undefined? Math.round(temperature) : "" }</h2>
          <a href="#" id="celsius-fahrenheit" onClick={handleClick} title="convert between °F|°C">
            {temperature !== undefined? unit : ""}
          </a>
        </div>
};

DisplayTemperature.propTypes = {
        temp: PropTypes.number,
    }

export default DisplayTemperature;