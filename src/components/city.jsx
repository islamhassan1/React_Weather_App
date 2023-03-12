import React from "react";

export const City = (props) => {
  const { weatherData, precipitation, forecast } = props;
  const now = new Date();

  // Format the date and time as a string
  const dateString = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const timeString = now.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`;
  const forecastList = forecast?.list.slice(0, 8); // select the first 8 items (i.e. 24 hours of data)
  const temperatureList = forecastList?.map((item) =>
    Math.round(item.main.temp)
  );
  const windList = forecastList?.map((item) => item.wind.speed);
  const humidityList = forecastList?.map((item) => item.main.humidity);
  const rainForecast = forecastList
    ?.slice(0, 3)
    .map((hour) => (hour.rain ? hour.rain["3h"] : 0));
  const iconCodeList = forecastList?.map((item) => item.weather[0].icon);
  const precipitationData = forecastList?.map((item) =>
    item.rain ? item.rain["3h"] : 0
  );
  const iconUrlList = iconCodeList?.map(
    (code) => `http://openweathermap.org/img/w/${code}.png`
  );
  const timeList = forecastList?.map((item) =>
    new Date(item.dt * 1000).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
  );
  return (
    <div>
      <div>
        <div>
          <div className="weather">
            <div className="top">
              <div>
                <p className="city">{weatherData.name}</p>
                <p className="weather-description">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div className="weather_icon">
                <img alt="" className="weather-icon" src={iconUrl} />
                <span className="temperature">
                  {Math.round(weatherData.main.temp)} &deg;C
                </span>
              </div>
            </div>
            <div className="bottom">
              <div>
                <p className="date">{dateString}</p>
                <p className="time">{timeString} </p>
              </div>
              <div className="details">
                <div className="parameter-row">
                  <span className="parameter-label">Wind :</span>
                  <span className="parameter-value">
                    {weatherData.wind.speed} m/s
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Humidity : </span>
                  <span className="parameter-value">
                    {weatherData.main.humidity}%
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Precipitation (3h) :</span>
                  <span className="parameter-value">{precipitation} mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="forecast">
        {forecastList.map((item, index) => (
          <div className="forecast_item">
            <div className="items-1">
              <p className="items-time">{timeList[index]}</p>
              <img
                alt="weather"
                className="forecast-icon"
                src={iconUrlList[index]}
              />
              <p className="forecast-temp">{temperatureList[index]}&deg; C</p>
              <p className="wind">{windList[index]} m/s</p>
              <p className="humdity">{humidityList[index]} %</p>
              <p className="rain">{rainForecast} mm</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
