import axios from "axios";
import { useEffect, useState } from "react";

const Country = ({ country }) => {

    const [cityWeather, setCityWeather] = useState({})

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${import.meta.env.VITE_API_KEY}`)
          .then(response => setCityWeather(response.data))
      }, [country.capital]);

    return ( 
        <div>
            <h1>{country.name.common}</h1>
            capital: {country.capital} <br />
            area: {country.area}
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>Weather in {country.capital}</h2>
            temperature {(cityWeather.main.temp - 273).toFixed(2)} Celsius
            <br />
            wind {cityWeather.wind.gust} m/s
        </div>
     );
}
 
export default Country;