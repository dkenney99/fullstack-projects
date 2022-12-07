import Person from "./Person";
import peopleService from "../services/peopleServices";

const ListOfPeople = (props) => {
  const persons = props.persons;
  const filteredPeople = props.filteredPeople;
  const deleteButton = props.deleteButton;

  return (
    <div className="">
      {persons
        .filter((person) => {
          return person.name.includes(filteredPeople);
        })
        .map((person) => (
          <Person
            name={person.name}
            key={person.id}
            number={person.number}
            deleteObject={() => deleteButton(person.id)}
          />
        ))}
    </div>
  );
};

export default ListOfPeople;
