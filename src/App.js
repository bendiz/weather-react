import { React, Fragment } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <Fragment>
      <body>
        <div className="container">
          <WeatherCard />
        </div>
      </body>
    </Fragment>
  );
}

export default App;
