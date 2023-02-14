import React from "react";
import Search from "./Search/Search";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <Search />
        </div>
        <footer>
          <a
            href="https://github.com/bendiz/weather-react"
            target="_blank"
            rel="noreferrer"
            title="Opens a link in a new window"
          >
            <i className="fa-brands fa-github"></i> Bendiz
          </a>
        </footer>
      </body>
    </div>
  );
}

export default App;
