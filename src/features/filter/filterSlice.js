import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  all: [],
  todos: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    uiLoaded: (state, action) => {
      state.todos = action.payload;
      state.all = action.payload;
    },
    all: (state, action) => {
      const filter = state.all.filter((todo) => true);
      state.todos = filter;
    },
    completed: (state, action) => {
      const filter = state.all.filter((todo) => todo.completed);
      state.todos = filter;
    },
    inCompleted: (state, action) => {
      const filter = state.all.filter((todo) => !todo.completed);
      state.todos = filter;
    },
    color: (state, action) => {
      const filter = state.all.filter((todo) => todo.color === action.payload);
      state.todos = filter;
    },
    completedAllTask: (state, action) => {
      const filter = state.all.map((todo) => {
        todo.completed = true;
        return todo;
      });
      state.todos = filter;
    },
    clearCompleted: (state, action) => {
      const filter = state.all.map((todo) => {
        todo.completed = false;
        return todo;
      });
      state.todos = filter;
    },
  },
});

export default filterSlice.reducer;
export const {
  uiLoaded,
  completed,
  inCompleted,
  all,
  color,
  completedAllTask,
  clearCompleted,
} = filterSlice.actions;
