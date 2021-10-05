import React, { useEffect, useState } from "react";
import { CountryTable } from "./CountryTable";
import "./styles.css";

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async() => {
      await fetch('http://api.countrylayer.com/v2/all?access_key=xx')
        .then(results => results.json())
        .then(data => {
          setCountryData(data);
        });
    }
    fetchCountryData();
  }, []);

  return (
    <CountryTable
        countryData = {countryData}
      />
  );
}

export default App;
