import React from "react";

const Person = (props) => {
  return (
    <div className=" text-2xl subpixel-antialiased m-5 block text-lg font-medium text-gray-700">
      {props.name} {props.number}{" "}
      <button
        className="text-base bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={props.deleteObject}
      >
        {" "}
        delete
      </button>
    </div>
  );
};

export default Person;
