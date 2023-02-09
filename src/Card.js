import Search from "./Search";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import LastUpdated from "./LastUpdated";

function Card() {
  return (
    <div class="weather-card">
      <Search />
      <WeatherDetails />
      <Forecast />
      <LastUpdated />
    </div>
  );
}

export default Card;
