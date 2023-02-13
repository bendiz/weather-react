import { React, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import Location from "./Location";
import CurrentWeather from "../WeatherInfo/CurrentWeather";
import Forecast from "../WeatherInfo/Forecast";
import LastUpdated from "../WeatherInfo/LastUpdated";

function Search() {
  const apiKey = "035283d2ed3751237392ce4250953768";
  const units = "metric";
  const [city, setCity] = useState("");
  const [weatherMessage, setWeatherMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const date = new Date();

function handleApiRequest(latitude, longitude) {
  let apiUrl;

  if (city && city.length > 0) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  } else if (latitude && longitude) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

  }

}


  function handleGeoLocation(latitude, longitude) {
    handleApiRequest(latitude, longitude);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleApiRequest()
  }

  function handleResponse(response) {
    setWeatherMessage({
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    })
    setLoading(false);
    console.log(response.data)
  }

  function updateCity(event) {
    setCity(event.target.value);
    setLoading(true);
  }


  // Displays an error message for the user if the city does not exist in API
  function handleError() {
    alert("Invalid name! Please enter a valid city name");
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
        <Location onGeoLocation={handleGeoLocation} Location={[weatherMessage.lat, weatherMessage.lon]} />
      </form>
      {loading && city.length > 0? (
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
      <CurrentWeather
        temp={weatherMessage.temperature}
        city={weatherMessage.city}
        icon={weatherMessage.icon}
        description={weatherMessage.description}
        wind={weatherMessage.wind}
        humidity={weatherMessage.humidity}
        date={date}
      />
      <Forecast city={weatherMessage.city} date={date} lat={weatherMessage.lat} lon={weatherMessage.lon} units={units} apiKey={apiKey}/>
      <LastUpdated date={date} />
    </div>
  );
}

export default Search;
