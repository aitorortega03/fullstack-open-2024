import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";
import Notification from "./components/Notification/Notification";

const App = () => {

  const messageTypes = Object.freeze({
    SUCCESS: 'success',
    ERROR: 'error'
  })

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notification, setNotification] = useState(null)

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
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        let personToChange = persons.find(person => person.name === newName)
        let personToUpdate = { ...personToChange, number: newNumber }
        personService.updatePerson(personToUpdate.id, personToUpdate)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNotification({message: `Updated ${newName}`, type: messageTypes.SUCCESS})
            setNewName('')
            setNewNumber('')
            setTimeout(() => setNotification(null), 5000)
          })
      }
    } else {
      personService.createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification({message: `Added ${newName}`, type: messageTypes.SUCCESS})
          setNewName('')
          setNewNumber('')
          setTimeout(() => setNotification(null), 5000)
        })
        .catch(error => {
          setNotification({message: error.response.data.error, type: messageTypes.ERROR})
          setTimeout(() => setNotification(null), 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification message={notification.message} messageType={notification.type}/>}
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} nameFilter={nameFilter} setPersons={setPersons} setNotification={setNotification} messageTypes={messageTypes}/>
    </div>
  );
};

export default App;
