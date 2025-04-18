import React from "react";

function WeatherInfo({ data }) {
  return (
    <div>
      <h2>{data.city}</h2> {/* ❌ may crash if data is undefined */}
      <p>🌡️ Temp: {data.temp}°C</p>
      <p>💨 Wind: {data.wind} km/h</p>
      <p>💧 Humidity: {data.humidity}%</p>
    </div>
  );
}

export default WeatherInfo;
