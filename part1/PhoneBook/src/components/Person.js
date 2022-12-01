import React from "react";

const Person = (props) => {
  return (
    <div>
      {props.name} {props.number}{" "}
      <button onClick={props.deleteObject}> delete</button>
    </div>
  );
};

export default Person;
