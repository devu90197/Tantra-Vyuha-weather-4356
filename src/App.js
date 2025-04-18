import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import WeatherIcon from "./components/WeatherIcon";

function App() {
  const [weatherData, setWeatherData] = useState(); // ❌ undefined

  const dummyWeather = {
    city: "Bangalore",
    temp: 28,
    wind: 12,
    humidity: 70,
    condition: "Cloudy"
  };

  const handleSearch = (city) => {
    // ❌ Does not update state, just logs
    console.log("Searched city:", city);
  };

  return (
    <div>
      <h1>🌦️ Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherInfo data={weatherData} />
      <WeatherIcon condition={weatherData?.condition} />
    </div>
  );
}

export default App;
