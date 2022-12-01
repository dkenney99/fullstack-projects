import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import SearchFilter from "./components/SearchFilter";
import ListOfPeople from "./components/ListOfPeople";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPeople, setFilteredPeople] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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
      <ListOfPeople persons={persons} filteredPeople={filteredPeople} />
    </div>
  );
};

export default App;
