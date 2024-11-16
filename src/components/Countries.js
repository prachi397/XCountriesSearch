import React, { useEffect, useState } from "react";
import './countries.css';
import Card from "./Card";

const Countries = () => {
  const [countryData, setCountryData] = useState([]);
  const api_url = "https://xcountries-backend.azurewebsites.net/all";
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((result) => setCountryData(result))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="country-grid">
        {
            countryData.map(({abbr,flag,name},idx)=>(
                <Card key={abbr+idx} flag={flag} name={name} altText={abbr}/>
            ))
        }
    </div>
  );
};
export default Countries;
