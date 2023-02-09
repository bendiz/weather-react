function Forecast() {
  return (
    <div class="bottom-section">
      <div class="weather-forecast-one">
        <p class="forecast-text">2°C</p>
        <img
          src="/img/weather-icons/09d.png"
          alt="Raining"
          class="weather-forecast-icon"
        />
        <p class="forecast-text">Sun</p>
      </div>
      <div class="weather-forecast-two">
        <p class="forecast-text">5°C</p>
        <img
          src="/img/weather-icons/03d.png"
          alt="Snow"
          class="weather-forecast-icon"
        />
        <p class="forecast-text">Mon</p>
      </div>
      <div class="weather-forecast-three">
        <p class="forecast-text">6°C</p>
        <img
          src="/img/weather-icons/01d.png"
          alt="Sunny, but cloudy."
          class="weather-forecast-icon"
        />
        <p class="forecast-text">Tue</p>
      </div>
      <div class="weather-forecast-four">
        <p class="forecast-text">7°C</p>
        <img
          src="/img/weather-icons/03d.png"
          alt="Partly Cloudly"
          class="weather-forecast-icon"
        />
        <p class="forecast-text">Wed</p>
      </div>
      <div class="weather-forecast-five">
        <p class="forecast-text">4°C</p>
        <img
          src="/img/weather-icons/02d.png"
          alt="Cloudy"
          class="weather-forecast-icon"
        />
        <p class="forecast-text">Thu</p>
      </div>
    </div>
  );
}

export default Forecast;
