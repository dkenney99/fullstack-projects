import React from "react";

const Person = (props) => {
  return (
    <div className="text-3xl subpixel-antialiased m-5 block font-medium text-gray-700">
      {props.name} {props.number}{" "}
      <button
        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
        onClick={props.deleteObject}
      >
        {" "}
        delete
      </button>
    </div>
  );
};

export default Person;
