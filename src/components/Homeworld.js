import React from "react";

function Homeworld(props) {
  return (
    <div className="flex">
      <div className="flex flex-col items-start px-2 ">
        <p className="text-[#4e4e50]">
          name : <span className="text-red-700"> {props.data.name}</span>
        </p>
        <p className="text-[#4e4e50]">
          climate : <span className="text-red-700"> {props.data.climate}</span>
        </p>
        <p className="text-[#4e4e50]">
          gravity : <span className="text-red-700"> {props.data.gravity}</span>
        </p>
      </div>
      <div className="flex flex-col items-start px-2">
        <p className="text-[#4e4e50]">
          population :{" "}
          <span className="text-red-700"> {props.data.population}</span>
        </p>
        <p className="text-[#4e4e50]">
          terrain : <span className="text-red-700"> {props.data.terrain}</span>
        </p>
        <p className="text-[#4e4e50]">
          rotation_period :{" "}
          <span className="text-red-700"> {props.data.rotation_period}</span>
        </p>
      </div>
    </div>
  );
}

export default Homeworld;
