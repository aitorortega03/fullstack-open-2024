import { useEffect, useState } from "react";
import Country from "./Country";

const CountryList = ({ countries, nameFilter }) => {

  const [selectedCountry, setSelectedCountry] = useState(null)

  let filteredCountries = nameFilter
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : [];

    const handleClickShow = (country) => setSelectedCountry(country)

    useEffect(() => {
      if (!nameFilter) {
        setSelectedCountry(null)
      }
    },[nameFilter])

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }
  if (filteredCountries.length === 1) {
    let country = filteredCountries[0];
    return <Country country={country} />;
  }
  return (
    <div>
      {filteredCountries.map((country) => (
        <span key={country.name.common}>
          {country.name.common} {} <button onClick={() => handleClickShow(country)}>show</button>
          <br />
        </span>
      ))}
      {selectedCountry && <Country country={selectedCountry}/>}
    </div>
  );
};

export default CountryList;
