import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },

    clearTodos: () => {
      return [];
    },

    addTodo: (state, action) => {
      state.push({
        ...action.payload,
        isNotified: false,
      });
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {
  setTodos,
  clearTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;