import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  all,
  color,
  completed,
  inCompleted,
} from "../features/filter/filterSlice";

const Footer = () => {
  const { todos } = useSelector((state) => state.filter);

  const remainingUncompletedTask = todos.filter((todo) => !todo.completed);

  const [selectedColor, setSelectedColor] = useState("");
  const [bold, setBold] = useState("all");
  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(all());
    setBold("all");
    setSelectedColor("");
  };
  const handleCompleted = () => {
    dispatch(completed());
    setBold("completed");
    setSelectedColor("");
  };
  const handleInCompleted = () => {
    dispatch(inCompleted());
    setBold("inCompleted");
    setSelectedColor("");
  };

  const handleColor = async (value) => {
    dispatch(color(value));
    setSelectedColor(value);
    setBold("");
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{remainingUncompletedTask.length} task left</p>
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
          onClick={() => handleColor("green")}
        ></li>

        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            selectedColor === "red" && "bg-red-500"
          }`}
          onClick={() => handleColor("red")}
        ></li>

        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            selectedColor === "yellow" && "bg-yellow-500"
          }`}
          onClick={() => handleColor("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
