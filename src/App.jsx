import React, { useState } from "react";
import Header from "./components/header/header";
import { CitiesDropdown } from "./components/citiesDropDown/citiesDropDown";
import "./App.css";
import { CityContainer } from "./components/citiesDropDown/citycontainer";
import { cities } from "./data/cities";
import AppBar from "../src/components/appBar/appBar";

function App() {
  const [selectedCities, setSelectedCities] = useState(
    cities.map((city) => city.name)
  );
  function resetSelectedCities() {
    setSelectedCities(cities);
  }
  return (
    <div>
      <AppBar />
      <Header />
      <CitiesDropdown
        setSelectedCities={setSelectedCities}
        resetSelectedCities={resetSelectedCities}
      />

      {selectedCities.map((cityName) => (
        <CityContainer cityName={cityName} />
      ))}
    </div>
  );
}

export default App;
