import { React, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import Location from "./Location";
import CurrentWeather from "../WeatherInfo/CurrentWeather";
import Forecast from "../WeatherInfo/Forecast";
import LastUpdated from "../WeatherInfo/LastUpdated";

function Search() {
  const apiKey = "ba1505034543c95143f951obc63t6cd4";
  const units = "metric";
  const [city, setCity] = useState("");
  const [weatherMessage, setWeatherMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const date = new Date();

function handleApiRequest(latitude, longitude) {
  let apiUrl;

  if (city && city.length > 0) {
    apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
    // Allows the user to make a 2nd query with location request when search field is not empty
    setCity("")
  } else if (latitude && longitude && !city) {
    apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
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
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude
    })
    setLoading(false);
  }

  function updateCity(event) {
    setCity(event.target.value);
    setLoading(true);
  }


  // Displays an error message for the user if the city does not exist in API
  function handleError(error) {
    console.log(error)
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
        iconUrl={weatherMessage.iconUrl}
        description={weatherMessage.description}
        wind={weatherMessage.wind}
        humidity={weatherMessage.humidity}
        date={weatherMessage.date}
      />
      <Forecast city={weatherMessage.city} date={weatherMessage.date} lat={weatherMessage.lat} lon={weatherMessage.lon} units={units} apiKey={apiKey} iconUrl={weatherMessage.iconUrl} description={weatherMessage.description}/>
      <LastUpdated date={date} />
    </div>
  );
}

export default Search;
