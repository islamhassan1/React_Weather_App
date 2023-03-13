import axios from "axios";

const API_KEY = "8366825ffff4d2cffc06f418a4ac78cb";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherData = async (lat, lon) => {
  const url = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchWeatheForecast = async (lat, lon) => {
  const urlFor = `${API_URL_FORECAST}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(urlFor);
  return response.data;
};
