import React, { useState } from "react";
import plus from "../assets/images/plus.png";
import notes from "../assets/images/notes.png";
import doubleTick from "../assets/images/double-tick.png";
import { useAddTodoMutation } from "../features/api/apiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  clearCompleted,
  completedAllTask,
} from "../features/filter/filterSlice";

const Header = () => {
  const [addTodo] = useAddTodoMutation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      text: inputValue,
      completed: false,
      color: "",
    });
    setInputValue("");
    toast.success("Successfully Added!");
  };

  const handleCompletedAll = () => {
    dispatch(completedAllTask());
  };
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAddTodo}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          required
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span onClick={handleCompletedAll}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
