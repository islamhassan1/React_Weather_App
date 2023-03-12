import React, { useEffect, useState } from "react";
import "./dropdown.css";
import { fetchWeatherData } from "../../api";
import { fetchWeatheForecast } from "../../api";
import { City } from "../city";

const cities = [
  { name: "Tampere", id: "634963" },
  { name: "Jyväskylä", id: "655194" },
  { name: "Kuopio", id: "650224" },
  { name: "Espoo", id: "660129" },
];

const CurrentWeather = () => {
  const [selectedCity, setSelectedCity] = useState("Tampere");
  const [weatherData, setWeatherData] = useState(null);
  const [precipitation, setPrecipitation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [isWeatherDataLoading, setIsWeatherDataLoading] = useState(true);
  const [isForecastLoading, setIsForecastLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      const data = await fetchWeatheForecast(selectedCity);
      setForecast(data);
      setIsForecastLoading(false);
    };

    fetchForecast();
  }, [selectedCity]);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetchWeatherData(selectedCity);
      setWeatherData(data);
      const precipitationData = data?.rain?.["3h"] || data?.snow?.["3h"];
      setPrecipitation(precipitationData || "No precipitation");
      setIsWeatherDataLoading(false);
    };
    fetchWeather();
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  if (isWeatherDataLoading || isForecastLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="dropdown">
      <select
        id="city-select"
        onChange={handleCityChange}
        labelId="demo-simple-select-label"
      >
        <option disabled selected>
          choose your city
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <City
        precipitation={precipitation}
        forecast={forecast}
        weatherData={weatherData}
      />
    </div>
  );
};

export default CurrentWeather;
