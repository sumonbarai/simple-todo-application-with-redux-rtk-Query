import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { all, completed, inCompleted } from "../features/filter/filterSlice";

const Footer = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [bold, setBold] = useState("all");
  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(all());
    setBold("all");
  };
  const handleCompleted = () => {
    dispatch(completed());
    setBold("completed");
  };
  const handleInCompleted = () => {
    dispatch(inCompleted());
    setBold("inCompleted");
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>2 tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${bold === "all" && "font-bold"}`}
          onClick={handleAll}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${bold === "inCompleted" && "font-bold"}`}
          onClick={handleInCompleted}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${bold === "completed" && "font-bold"}`}
          onClick={handleCompleted}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            selectedColor === "green" && "bg-green-500"
          }`}
        ></li>

        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            selectedColor === "red" && "bg-red-500"
          }`}
        ></li>

        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            selectedColor === "yellow" && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
