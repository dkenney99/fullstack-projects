import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import SearchFilter from "./components/SearchFilter";
import ListOfPeople from "./components/ListOfPeople";
import peopleService from "./services/peopleServices";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPeople, setFilteredPeople] = useState("");
  const [addedMessage, setAddedMessage] = useState("");

  const Hook = () =>
    useEffect(() => {
      peopleService.getAll().then((peopleData) => setPersons(peopleData));
    }, []);

  Hook();

  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };
    peopleService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setAddedMessage(`${returnedPerson.name}  was added`);
      setNewName("");
      setNewNumber("");
      setTimeout(() => {
        setAddedMessage("");
      }, 5000);
    });
  };

  const deleteName = (id) => {
    peopleService.remove(id).then((returnedObject) => {
      setPersons([...returnedObject]);
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
      <Notification message={addedMessage} />
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
      <ListOfPeople
        persons={persons}
        filteredPeople={filteredPeople}
        deleteButton={deleteName}
      />
    </div>
  );
};

export default App;
