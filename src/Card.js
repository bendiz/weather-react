import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import CurrentCity from "./CurrentCity";
import CurrentDay from "./CurrentDay";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import LastUpdated from "./LastUpdated";

function Card() {
  return (
    <div class="weather-card">
      <Search />
      <CurrentWeather />
      <CurrentCity />
      <CurrentDay />
      <WeatherDetails />
      <Forecast />
      <LastUpdated />
    </div>
  );
}

export default Card;
