import Location from "./Location";
import CurrentCity from "./CurrentCity";
import CurrentWeather from "./CurrentWeather";
import CurrentDay from "./CurrentDay";
import { useState, useEffect } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

function Search() {
  const [city, setCity] = useState("");
  const [weatherMessage, setWeatherMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const date = new Date();

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "035283d2ed3751237392ce4250953768";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    setLoading(true);
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setWeatherIcon(response.data.weather[0].icon);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setLoading(false);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    setLoading(true);
  }

  // Displays an error message for the user if the city does not exist in API
  function handleError() {
    setWeatherMessage("Invalid name! Please enter a valid city name");
  }

  // Delays the message from appearing before state of temperature is changed
  useEffect(() => {
    temperature && !loading
      ? setWeatherMessage([temperature, city, weatherIcon, wind, humidity])
      : // While search input gets changed a loading animation appears
      loading && city.length > 0
      ? setWeatherMessage(
          <BeatLoader
            color="#306974"
            loading={loading}
            cssOverride={false}
            size={5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )
      : // Display nothing when length of input is at 0
        setWeatherMessage(" ");
  }, [loading, city, temperature]);

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autofocus
          maxlength="14"
          minlength="2"
          onChange={updateCity}
        />
        <Location />
      </form>
      <CurrentWeather
        temp={weatherMessage[0]}
        city={weatherMessage[1]}
        icon={weatherMessage[2]}
        wind={weatherMessage[3]}
        humidity={weatherMessage[4]}
      />
    </div>
  );
}

export default Search;
