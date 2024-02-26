import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <>
      <p>
        find countries:{" "}
        <input value={nameFilter} onChange={handleNameFilterChange} />
      </p>
      <CountryList countries={countries} nameFilter={nameFilter}/>
    </>
  );
};

export default App;
