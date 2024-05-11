import React from 'react';

function WeatherDataComponent({ currentCity }) {
  return (
    <div>
      <div className="weather-data">
        <div className="weather-data-item">Temperature: <span>{currentCity.temperature}</span></div>
        <div className="weather-data-item">Humidity: <span>{currentCity.humidity}</span></div>
        <div className="weather-data-item">Wind Speed: <span>{currentCity.windSpeed}</span></div>
      </div>
    </div>
  );
}

export default WeatherDataComponent;