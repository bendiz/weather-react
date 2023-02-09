function CurrentWeather({ temp, icon }) {
  // Checks if temperature and icon exist
  !temp ? (temp = "") : (temp = temp);
  !icon ? (icon = "02d") : (icon = icon);

  const url = `/img/weather-icons/${icon}.png`;
  return (
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
  );
}

export default CurrentWeather;
