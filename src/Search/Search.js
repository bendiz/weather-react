import { React, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import CurrentWeather from "../WeatherInfo/CurrentWeather";

function Search() {
  const apiKey = "ba1505034543c95143f951obc63t6cd4";
  const units = "metric";
  const [city, setCity] = useState("");
  const [weatherMessage, setWeatherMessage] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [queried, setQueried] = useState(false);

  // Options for GeoLocation
  const options = {
    maximumAge: Infinity,
    timeout: Infinity,
    enableHighAccuracy: false,
  };
  // Sets default city when user opens the weather app
  if (!queried && weatherMessage.lat === undefined) {
    let apiUrl = "";
    apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=${units}`;
    setQueried(true);
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleApiRequest(latitude, longitude) {
    let apiUrl = "";

    if (city && city.length > 0) {
      apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse).catch(handleError);
      // Allows the user to make a 2nd query with location request when search field is not empty
      setCity("");
    } else if (latitude && longitude && !city) {
      apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse).catch(handleError);
    }
  }

  function callForecastAPI(response) {
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?lon=${response.data.coordinates.longitude}&lat=${response.data.coordinates.latitude}&key=${apiKey}&units=${units}`
      )
      .then(handleForecastResponse);
  }

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
  }

  function handleClick(event) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    handleApiRequest(latitude, longitude);
  }

  function errorCallback(error) {
    console.log(error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleApiRequest();
  }

  function handleResponse(response) {
    setWeatherMessage({
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude,
    });
    setLoading(false);
    callForecastAPI(response);
  }

  function updateCity(event) {
    setCity(event.target.value);
    setLoading(true);
  }

  // Displays an error message for the user if the city does not exist in API
  function handleError(error) {
    console.log(error);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoFocus
          maxLength="14"
          minLength="2"
          onChange={updateCity}
        />
        <button
          className="Location"
          id="geo-button"
          type="button"
          onClick={handleClick}
        >
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </form>
      {loading && city.length > 0 ? (
        <BeatLoader
          color="#306974"
          loading={loading}
          cssOverride={false}
          size={5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        ""
      )}
      <CurrentWeather info={weatherMessage} forecast={forecast} />
    </div>
  );
}

export default Search;
