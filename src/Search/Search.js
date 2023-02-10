import { React, useState, useEffect } from "react";
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
  const [weatherMessage, setWeatherMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [lastCity, setLastCity] = useState("");
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const date = new Date();

  function handleApiRequest(latitude, longitude) {
    let apiUrl;
    if (latitude && longitude && !userInput) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse).catch(handleError);
  } else if (latitude && longitude || userInput) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }
  }


  function handleGeoLocation(latitude, longitude) {
    setLatitude(latitude);
    setLongitude(longitude);
    handleApiRequest(latitude, longitude);

  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setLastCity(city);
    handleApiRequest()
  }

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setWeatherIcon(response.data.weather[0].icon);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setLoading(false);
    setCity(response.data.name)
    setLon(response.data.coord.lon)
    setLat(response.data.coord.lat)
  }

  function updateCity(event) {
    setCity(event.target.value);
    setUserInput(true);
    setLoading(true);
  }


  // Displays an error message for the user if the city does not exist in API
  function handleError() {
    alert("Invalid name! Please enter a valid city name");
  }

  // Delays the message from appearing before state of temperature is changed
  useEffect(() => {
    temperature && !loading
      ? setWeatherMessage([temperature, city, weatherIcon, wind, humidity])
      : // While search input gets changed a loading animation appears
      temperature && loading
      ? setWeatherMessage([temperature, lastCity, weatherIcon, wind, humidity])
      : // Display nothing when length of input is at 0
        setWeatherMessage("");
  }, [loading, city, temperature]);

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
        <Location onGeoLocation={handleGeoLocation} Location={[latitude, longitude]} />
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
      <CurrentWeather
        temp={weatherMessage[0]}
        city={weatherMessage[1]}
        icon={weatherMessage[2]}
        wind={weatherMessage[3]}
        humidity={weatherMessage[4]}
        date={date}
      />
      <Forecast city={weatherMessage[1]} date={date} lat={lat} lon={lon} units={units} apiKey={apiKey}/>
      <LastUpdated date={date} />
    </div>
  );
}

export default Search;
