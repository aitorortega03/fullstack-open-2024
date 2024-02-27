const Country = ({ country }) => {
    return ( 
        <div>
            <h2>{country.name.common}</h2>
            capital: {country.capital} <br />
            area: {country.area}
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
     );
}
 
export default Country;