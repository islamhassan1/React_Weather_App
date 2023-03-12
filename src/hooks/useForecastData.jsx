import { useEffect, useState } from "react";
import { fetchWeatheForecast } from "../api";

export function useForecastData(cityName) {
  const [forecast, setForecast] = useState(null);
  const [isForecastLoading, setIsForecastLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      const data = await fetchWeatheForecast(cityName);
      setForecast(data);
      setIsForecastLoading(false);
    };

    fetchForecast();
  }, [cityName]);
  return {
    forecast,
    isForecastLoading,
  };
}
