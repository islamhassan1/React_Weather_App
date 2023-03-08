import React, { useEffect, useState } from "react";
import "./dropdown.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { inputAdornmentClasses } from "@mui/material";
import { GEO_API_URL, geoApiOptions } from "../../api";

const CurrentWeather = ({onSearchChange}) => {
  const [search, setsearch] = React.useState('');
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (event) => {
    setsearch(event.target.value);
    onSearchChange(event);
  };


 
  return (
    <div className="dropdown">
      <Box sx={{}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ fontSize: "13pt" }}>
            Kaikki Kaupungit
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search}
            label="search"
            onChange={handleChange}
            loadOptions={loadOptions}
          >
            <MenuItem value="${61.4991},${23.7871}">Tampere</MenuItem>
            <MenuItem value="${62.2415},${25.7209}">Jyväskylä</MenuItem>
            <MenuItem value="${62.8924},${27.677}">Kuopio</MenuItem>
            <MenuItem value="${60.25},${24.6667}">Espoo</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default CurrentWeather;

