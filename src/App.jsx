import { useRef } from 'react';
import { useState } from 'react';
import { mockWeatherData } from './mockWeatherData';
import { HistoryButton } from './HistoryButton';
import WeatherDataComponent from './WeatherDataComponent';

function WeatherDashboard() {
  const inputCityRef = useRef(null)
  const [currentCity, setCurrentCity] = useState({})
  const [history, setHistory] = useState([])
  const [doesCityExist, setDoesCityExist] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault();
    if(mockWeatherData[inputCityRef.current.value]){
      search(inputCityRef.current.value)
    } else {
      setDoesCityExist(false)
    }
  }
  const search = (city) => {
    setCurrentCity(mockWeatherData[city])
    if(history.indexOf(city)==-1){
      setHistory([...history,city])
    }
    setDoesCityExist(true)
  }
  return (
    <div className="weather-dashboard-container">
      <input type="text" id="citySearch" className="city-search-input" placeholder="Search for a city..." ref={inputCityRef}/>
      <button id="searchButton" className="search-button" onClick={handleSearch}>Search</button>
      <div id="previousSearches" className="previous-searches">
        {history.map(
          city => <HistoryButton key={city} city={city} act={search}/>
        )}
      </div>
      {doesCityExist ? (
        <WeatherDataComponent currentCity={currentCity}/>
      ) : (
        <div className="city-not-found">Ciudad no encontrada</div>
      )}
    </div>
 );
}
export default WeatherDashboard;