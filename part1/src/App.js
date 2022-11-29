import { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPeople, setFilteredPeople] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    persons.forEach((person) => {
      if (person.name.includes(newName)) {
        return alert(`${newName} is already added to the phonebook`);
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      }
    });
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilteredPeople(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <SearchFilter
          handleFilter={handleFilter}
          filteredPeople={filteredPeople}
        />
        <PersonForm
          handleNewName={handleNewName}
          newName={newName}
          handleNewNumber={handleNewNumber}
          newNumber={newNumber}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter((person) => {
            return person.name.includes(filteredPeople);
          })
          .map((person) => (
            <Person name={person.name} key={person.id} number={person.number} />
          ))}
      </div>
    </div>
  );
};

export default App;
