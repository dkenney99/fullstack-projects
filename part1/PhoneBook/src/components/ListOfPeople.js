import Person from "./Person";

const ListOfPeople = (props) => {
  const persons = props.persons;
  const filteredPeople = props.filteredPeople;

  return (
    <div>
      {persons
        .filter((person) => {
          return person.name.includes(filteredPeople);
        })
        .map((person) => (
          <Person name={person.name} key={person.id} number={person.number} />
        ))}
    </div>
  );
};

export default ListOfPeople;
