import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <div>
        <h2>add a new</h2>
        name: <input onChange={props.handleNewName} value={props.newName} />
      </div>
      <div>
        number:{" "}
        <input onChange={props.handleNewNumber} value={props.newNumber} />
      </div>
    </div>
  );
};

export default PersonForm;
