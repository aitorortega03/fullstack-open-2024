import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas"
    },
  ]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault()
    let newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} onChange={handleNameChange}>
        <div>
          name: <input value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {
          persons.map(person => <li key={person.name}>{person.name}</li>) 
        }
      </ul>
    </div>
  );
};

export default App;
