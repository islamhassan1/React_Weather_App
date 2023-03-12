import React from "react";
import { City } from "../city";
import { useWeatherData } from "../../hooks/useWeatherData";
import { useForecastData } from "../../hooks/useForecastData";

export function CityContainer(props) {
  const { cityName } = props;
  const { isWeatherDataLoading, weatherData } = useWeatherData(cityName);
  const { isForecastLoading, forecast } = useForecastData(cityName);
  const precipitation = weatherData?.rain?.["3h"] || weatherData?.snow?.["3h"];

  if (isWeatherDataLoading || isForecastLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <City
      precipitation={precipitation}
      forecast={forecast}
      weatherData={weatherData}
    />
  );
}
