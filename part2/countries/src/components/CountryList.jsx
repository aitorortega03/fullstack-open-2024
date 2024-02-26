import Country from "./Country";

const CountryList = ({ countries, nameFilter }) => {
  let filteredCountries = nameFilter
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : [];

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
          {country.name.common}
          <br />
        </span>
      ))}
    </div>
  );
};

export default CountryList;
