import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personService.getAllPersons()
    .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addName = (event) => {
    event.preventDefault()
    let newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      personService.createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} nameFilter={nameFilter} setPersons={setPersons}/>
    </div>
  );
};

export default App;
