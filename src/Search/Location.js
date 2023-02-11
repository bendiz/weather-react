import React from "react";
import PropTypes from "prop-types";

function Location({ onGeoLocation }) {

  Location.propTypes = {
    onGeoLocation: PropTypes.func.isRequired,
  };

  function handleClick(event) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      onGeoLocation(latitude, longitude);
    });
  }

  return (
    <button className="Location" id="geo-button" onClick={handleClick}>
      <i className="fa-solid fa-location-dot"></i>
    </button>
  );
}

export default Location;
