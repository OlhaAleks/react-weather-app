import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState(false);
  let [information, setInformation] = useState({});

  function showInformation(response) {
    setMessage(true);
    setInformation({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5d30b474d4ae284fe49b962e45b136f7";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showInformation);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (message) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature is {Math.round(information.temperature)}°C</li>
          <li>Description: {information.description}</li>
          <li>Humidity: {information.humidity}%</li>
          <li>Wind: {Math.round(information.wind)}km/h</li>
          <li>
            <img src={information.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
