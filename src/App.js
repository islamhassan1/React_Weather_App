import { useState } from "react";
import Header from "./components/header/header";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Dropdown from "./components/dropdown/dropdown";
import "./App.css";

function App() {
  const handerOnSearchChange = (event) => {
    console.log(event);
  }

  

  return (
    <div className="container">
      <Header />
      <Dropdown onSearchChange={handerOnSearchChange}/>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
