import React, { useEffect, useState } from "react";
import './countries.css';
import Card from "./Card";

const Countries = () => {
  const [countryData, setCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const api_url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((result) => {
        setCountryData(result);
        setFilteredData(result); 
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  function handleSearch(e) {
    const searchValue = e.target.value.toLowerCase(); 
    const filteredCountries = countryData.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue) 
    );
    setFilteredData(filteredCountries); 
  }
  
  return (
    <div className="country-container">
     <input type="text" placeholder="Search for countries..." onChange={handleSearch}/>
    <div className="country-grid">
        {
            filteredData.map(({flags,name},idx)=>(
                <Card key={idx} flag={flags.png} name={name.common} altText={name.official}/>
            ))
        }
    </div>
    </div>
  );
};
export default Countries;
