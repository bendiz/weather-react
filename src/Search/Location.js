import React from "react";
import PropTypes from "prop-types";

function Location({ city }) {
  Location.propTypes = {
    city: PropTypes.string.isRequired,
  };

  return (
    <button id="geo-button" onClick="onclick">
      <i className="fa-solid fa-location-dot"></i>
    </button>
  );
}

export default Location;
