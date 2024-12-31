import axios, { AxiosError, AxiosResponse } from "axios";
import { AxiosCommonHeaderProperties } from "types/common";

const baseURL = process.env.API_URL;

export const instance = axios.create({
  baseURL,
});

//@ts-ignore
instance.defaults.headers = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
} as AxiosCommonHeaderProperties;

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const API = {
  get: (url: string) =>
    instance
      .get(url)
      .then((response: AxiosResponse) => response)
      .catch((error: AxiosError) => error.response),
  post: (url: string, params?: object) =>
    instance
      .post(url, params)
      .then((response: AxiosResponse) => response)
      .catch((error: AxiosError) => error.response),
  put: (url: string, params?: object) =>
    instance
      .put(url, params)
      .then((response: AxiosResponse) => response)
      .catch((error: AxiosError) => error.response),
  delete: (url: string) =>
    instance
      .delete(url)
      .then((response: AxiosResponse) => response)
      .catch((error: AxiosError) => error.response),
};
