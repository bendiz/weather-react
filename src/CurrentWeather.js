import CurrentCity from "./CurrentCity";
import CurrentDay from "./CurrentDay";
import WeatherDetails from "./WeatherDetails";

function CurrentWeather({ temp, city, icon, wind, humidity }) {
  // Checks if temperature and icon exist
  !temp ? (temp = "") : (temp = temp);
  !icon ? (icon = "02d") : (icon = icon);
  !wind ? ([wind, humidity] = "") : (wind = wind);

  const url = `/img/weather-icons/${icon}.png`;
  return (
    <div>
      <div class="current-weather-section">
        <img src={url} alt="Weather Icon" class="weather-icon" />
        <div class="temperature-container">
          <link class="current-temp" />
          <h2 id="temperature">{Math.round(temp)}</h2>
          <a href="/" id="celsius-fahrenheit">
            °C
          </a>
        </div>
      </div>
      <CurrentCity city={city} />
      <CurrentDay />
      <WeatherDetails wind={wind} humidity={humidity} />
    </div>
  );
}

export default CurrentWeather;
