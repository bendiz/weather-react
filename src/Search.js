import Location from "./Location";
import { useState, useEffect } from "react";

function Search() {
  return (
    <form id="search-form">
      <input
        type="search"
        name="search"
        id="search"
        autofocus
        placeholder="Search for a city here..."
        maxlength="14"
        minlength="2"
      />
      <Location />
    </form>
  );
}

export default Search;
