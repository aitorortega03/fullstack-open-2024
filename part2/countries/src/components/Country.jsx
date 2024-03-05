import axios from "axios";
import { useEffect, useState } from "react";

const Country = ({ country }) => {
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          country.capital
        }&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then(response => setCityWeather(response.data));
  }, [country]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      capital: {country.capital} <br />
      area: {country.area}
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      {cityWeather && (
        <div>
          temperature {(cityWeather.main.temp - 273).toFixed(2)} Celsius
          <br />
          {console.log(cityWeather.wind.speed)}
          <img
            src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
          />
          wind {cityWeather.wind.speed} m/s
        </div>
      )}
    </div>
  );
};

export default Country;
