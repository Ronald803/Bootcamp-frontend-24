import React from 'react'

function WeatherDataComponent({currentCity}) {
  return (
    <div>
      <div id="weatherData">
        {<div>Temperature: {currentCity.temperature}</div>}
        {<div>Humidity: {currentCity.humidity}</div>}
        {<div>Wind Speed: {currentCity.windSpeed}</div>}
      </div>
    </div>
  )
}

export default WeatherDataComponent