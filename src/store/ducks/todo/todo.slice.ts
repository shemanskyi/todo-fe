import { createSlice } from "@reduxjs/toolkit";

import { FILTERS } from "pages/Todo/Todo.constants";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "./todo.actions";
import { TodosState } from "./types";

const initialState = {
  list: [],
  todo: null,
  query: "",
  filter: FILTERS.all,
  sorting: "date",
  isOpen: false,
  counter: 0,
} as TodosState;

export const todosSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      getAllTodo.fulfilled,
      (state: TodosState, { payload: { data } }) => {
        state.list = data;
        return state;
      }
    );
    builder.addCase(createTodo.fulfilled, (state: TodosState) => {
      state.counter += 1;
      state.isOpen = false;
      return state;
    });
    builder.addCase(updateTodo.fulfilled, (state: TodosState) => {
      state.counter += 1;
      state.isOpen = false;
      return state;
    });
    builder.addCase(deleteTodo.fulfilled, (state: TodosState) => {
      state.counter += 1;
      console.log('DELETED')
      return state;
    });
  },
  initialState,
  name: "todos",
  reducers: {
    clearState: (state) => {
      state.list = [];

      return state;
    },
    filterTodo: (state, { payload }) => {
      state.filter = payload;

      return state;
    },
    searchTodo: (state, { payload }) => {
      state.query = payload;

      return state;
    },
    sortTodo: (state, { payload }) => {
      state.sorting = payload;

      return state;
    },
    openDialog: (state, { payload }) => {
      state.isOpen = true;
      state.todo = payload;

      return state;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.todo = null;

      return state;
    },
  },
});

export const {
  clearState,
  searchTodo,
  filterTodo,
  sortTodo,
  openDialog,
  closeDialog,
} = todosSlice.actions;

export const todosSelector = (state: { logs: TodosState }) => state.logs;
