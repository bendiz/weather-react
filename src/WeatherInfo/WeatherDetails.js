import { useState, useEffect } from "react";

function WeatherDetails({ wind, humidity }) {
  let [windReport, setWindReport] = useState(null);
  let [humidityReport, setHumidityReport] = useState(null);

  function setReports(state) {
    if (state) {
      setWindReport(`\u{224B} ${Math.round(wind)}m/s`);
      setHumidityReport(`\u{1F322} ${Math.round(humidity)}%`);
    } else {
      setWindReport(``);
      setHumidityReport(``);
    }
  }

  useEffect(() => {
    wind && humidity ? setReports(true) : setReports(false);
  }, [wind, humidity]);

  return (
    <div className="details">
      <span id="wind-speed">{windReport}</span>
      <span id="humidity">{humidityReport}</span>
    </div>
  );
}

export default WeatherDetails;
