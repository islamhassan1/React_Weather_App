import { useEffect, useState } from "react";
import { fetchWeatherData } from "../api";

export function useWeatherData(cityName) {
  const [weatherData, setWeatherData] = useState(null);
  const [isWeatherDataLoading, setIsWeatherDataLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
      setIsWeatherDataLoading(false);
    };
    fetchWeather();
  }, [cityName]);

  return {
    weatherData,
    isWeatherDataLoading,
  };
}
