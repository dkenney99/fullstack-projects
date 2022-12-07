import React from "react";

const PersonForm = (props) => {
  return (
    <div className="my-5 block text-lg font-medium text-gray-700">
      <div>
        <h2 className="my-5 text-3xl font-bold underline">add a new</h2>
        name:{" "}
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={props.handleNewName}
          value={props.newName}
        />
      </div>
      <div>
        number:{" "}
        <input
          className="my-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={props.handleNewNumber}
          value={props.newNumber}
        />
      </div>
    </div>
  );
};

export default PersonForm;
