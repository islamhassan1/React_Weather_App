import React from "react";
import "./current-weather.css";
import weather from "../../icons/04d.png";

const CurrentWeather = () => {
  return (
    <div>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">Helsinki</p>
            <p className="weather-description">Scattered Clouds</p>
          </div>
          <div className="weather_icon">
          <img alt="weather" className="weather-icon" src={weather} />
          <span className="temperature">0 °C</span>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p className="date">May2nd</p>
            <p className="time">11:00 </p>
          </div>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value"> m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
