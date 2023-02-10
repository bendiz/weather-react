import { React, Fragment } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <Fragment>
      <body>
        <div className="container">
          <WeatherCard />
        </div>
        <footer><a href="https://github.com/bendiz/weather-react" target="_blank" rel="noreferrer" title="Opens a link in a new window"><i className="fa-brands fa-github"></i> Bendiz</a></footer>
      </body>
    </Fragment>
  );
}

export default App;
