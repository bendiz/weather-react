import React from "react";
import Search from "./Search/Search";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
