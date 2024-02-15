const Persons = ({ persons, nameFilter }) => {
    return ( 
        <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(nameFilter.toLowerCase())
          )
          .map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
     );
}
 
export default Persons;