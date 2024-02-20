import personService from "../services/personService";

const Persons = ({ persons, nameFilter, setPersons }) => {
  const handleDelete = (person) => {

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(person.id)
      .then(personDeleted => setPersons(persons.filter(person => person.id !== personDeleted.id)))
    }
  };

  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number} {}
            <button onClick={() => handleDelete(person)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
