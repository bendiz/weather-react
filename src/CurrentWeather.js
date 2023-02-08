function CurrentWeather() {
  return (
    <div class="current-weather-section">
      <img
        src="/img/weather-icons/partly-cloud.png"
        alt="Weather Icon"
        class="weather-icon"
      />
      <div class="temperature-container">
        <link class="current-temp" />
        <h2 id="temperature">0</h2>
        <a href="/" id="celsius-fahrenheit">
          °C
        </a>
      </div>
    </div>
  );
}

export default CurrentWeather;
