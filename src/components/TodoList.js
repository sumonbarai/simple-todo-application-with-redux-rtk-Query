import React from "react";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Loader from "./loader/Loader";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isError, isLoading } = useGetTodosQuery();

  // what to do render
  let content = null;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && isError) {
    content = <p className="text-red-500">Todos data fetching some error</p>;
  }
  if (!isLoading && !isError && todos.length === 0) {
    content = <p className="text-green-500">No Todos Found</p>;
  }
  if (!isLoading && !isError && todos.length > 0) {
    content = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  }
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {content}
    </div>
  );
};

export default TodoList;
