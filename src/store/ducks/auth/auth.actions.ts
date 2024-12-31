import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "services/API";

import { TOAST_CONFIG } from "config/toast";
import { AUTH_TYPES } from "./auth.types";

const login = createAsyncThunk(
  AUTH_TYPES.LOGIN,
  //@ts-ignore
  async ({ params }: Partial<RequestParams>, thunkAPI) => {
    const response = await API.post(`/auth/login`, params);

    //@ts-ignore
    const { data, status } = response;
    const { token } = data;
    if (status === 202) {
      localStorage.setItem("token", token);
      window.location.pathname = "/";
    }

    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

const register = createAsyncThunk(
  AUTH_TYPES.LOGIN,
  //@ts-ignore
  async ({ params }: Partial<RequestParams>, thunkAPI) => {
    const response = await API.post(`/auth/register`, params);

    //@ts-ignore
    const { data, status } = response;
    console.log(data);
    if (status === 200) {
      window.location.pathname = "/login";
    }
    const errorMessage = data || "Something Went Wrong";

    //@ts-ignore
    toast.error(errorMessage, TOAST_CONFIG);
    return thunkAPI.rejectWithValue(response);
  }
);

export { login, register };
