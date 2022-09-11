import React from "react";
import { GrFormEdit } from "react-icons/gr";
import cancel from "../assets/images/cancel.png";
import {
  useCompletedTaskMutation,
  useDeleteTodoMutation,
  useEditColorMutation,
} from "../features/api/apiSlice";

const TodoItem = ({ todo }) => {
  const [EditColor] = useEditColorMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [completedTask] = useCompletedTaskMutation();
  const { id, text, completed, color } = todo;

  const handleDelete = () => {
    const confirmation = window.confirm("are you sure ?");
    if (confirmation) {
      deleteTodo(id);
    }
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        onClick={() => completedTask({ id, completed })}
        className={`rounded-full bg-white border-2 ${
          completed ? "border-green-500" : "border-gray-500"
        } w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2`}
      >
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>

      <div
        onClick={(e) => EditColor({ id, color: "green" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={(e) => EditColor({ id, color: "yellow" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={(e) => EditColor({ id, color: "red" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
      ></div>

      <div className="text-2xl cursor-pointer">
        <GrFormEdit />
      </div>

      <img
        onClick={handleDelete}
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default TodoItem;
