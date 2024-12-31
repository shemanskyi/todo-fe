import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "services/API";

import { TODO_TYPES } from "./todo.types";

const getAllTodo = createAsyncThunk(
  TODO_TYPES.GET_ALL,
  //@ts-ignore
  async (_, thunkAPI) => {
    const response = await API.get(`/todo`);

    //@ts-ignore
    const { data, status } = response;
    if (status === 200) {
      return { data };
    }

    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

const createTodo = createAsyncThunk(
  TODO_TYPES.CREATE,
  //@ts-ignore
  async ({ params }, thunkAPI) => {
    const response = await API.post(`/todo`, params);

    //@ts-ignore
    const { data, status } = response;

    if (status === 201) {
      //@ts-ignore
      toast.success("Created Successful!", TOAST_CONFIG);
    }

    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

const updateTodo = createAsyncThunk(
  TODO_TYPES.UPDATE,
  //@ts-ignore
  async ({ params, id }, thunkAPI) => {
    const response = await API.put(`/todo/${id}`, params);

    //@ts-ignore
    const { data, status } = response;

    if (status === 200) {
      //@ts-ignore
      toast.success("Updated Successful!", TOAST_CONFIG);
    }

    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

const deleteTodo = createAsyncThunk(
  TODO_TYPES.DELETE,
  //@ts-ignore
  async ({ id }, thunkAPI) => {
    const response = await API.delete(`/todo/${id}`);

    //@ts-ignore
    const { data, status } = response;
    if (status === 204) {
      console.log({ status });
      //@ts-ignore
      toast.success("Deleted Successful!", TOAST_CONFIG);
    }

    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

export { createTodo, deleteTodo, getAllTodo, updateTodo };
