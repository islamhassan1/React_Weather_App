import { useState } from "react";
import { cities } from "../../data/cities";
import "./citiesDropDown.css";

export function CitiesDropdown(props) {
  const { setSelectedCities, resetSelectedCities } = props;

  const handleCityChange = (event) => {
    if (!event.target.value) {
      resetSelectedCities();
    } else {
      setSelectedCities([event.target.value]);
    }
  };

  return (
    <div className="dropdown">
      <select
        id="city-select"
        onChange={handleCityChange}
        labelId="demo-simple-select-label"
      >
        <option value="">choose your city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
