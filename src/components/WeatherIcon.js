import React from "react";

function WeatherIcon({ condition }) {
  const iconMap = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rainy: "🌧️",
    Snow: "❄️"
  };

  return (
    <div>
      <h3>Condition: {condition}</h3>
      <p>{iconMap[condition]}</p> {/* ❌ if condition is undefined, shows nothing */}
    </div>
  );
}

export default WeatherIcon;
