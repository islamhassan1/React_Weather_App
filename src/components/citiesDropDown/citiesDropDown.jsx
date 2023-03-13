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
        <option value="">Kaikki Kaupungit</option>
        {cities.map((city) => (
          <option key={city.value} value={city.name}>
            {city.value}
          </option>
        ))}
      </select>
    </div>
  );
}
