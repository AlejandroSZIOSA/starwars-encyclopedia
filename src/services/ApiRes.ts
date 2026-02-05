import axios from "axios";
import type { DataResBase } from "./ApiRes.types";

// Create a new axios instance
const instance = axios.create({
  baseURL: "https://swapi.thehiveresistance.com/api/",
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

// make a generic HTTP GET request
export const get = async <T>(endpoint: string) => {
  const res = await instance.get<T>(endpoint);
  return res.data;
};

//endpoint functions

//fixed: infers datatypes :)
export const getData = async <T>(params: string): Promise<DataResBase<T>> => {
  /*   const endpoint = params ? `/${params}` : "/films"; */
  return get<DataResBase<T>>(params);
};

//fixed: infers datatypes :)
export const getDetails = async <T>(params: string) => {
  return get<T>(params);
};
