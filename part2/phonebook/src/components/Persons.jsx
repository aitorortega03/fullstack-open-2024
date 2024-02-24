import personService from "../services/personService";

const Persons = ({ persons, nameFilter, setPersons, setNotification, messageTypes }) => {
  const handleDelete = (person) => {

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(person.id)
      .then(personDeleted => setPersons(persons.filter(person => person.id !== personDeleted.id)))
      .catch(error => {
        console.log(error)
        setNotification({message: `Information of ${person.name} has already been removed from server`, type: messageTypes.ERROR})
        setTimeout(() => setNotification(null), 5000)
      })
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
