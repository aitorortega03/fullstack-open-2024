const PersonForm = ({ addName, newName, newNumber, setNewName, setNewNumber }) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

    return ( 
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
     );
}
 
export default PersonForm;