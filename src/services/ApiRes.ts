import axios from "axios";
import type { DataResBase, ProductDetailsResponse } from "./ApiRes.types";

// Create a new axios instance
const instance = axios.create({
  baseURL: "https://swapi.thehiveresistance.com/api/",
  headers: {
    Accept: "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Make a generic HTTP GET request
export const get = async <T>(endpoint: string) => {
  const res = await instance.get<T>(endpoint);
  return res.data;
};

export const getFilms = async () => {
  return get<DataResBase>("/films");
};

export const getProductDetails = async (id: number) => {
  return get<ProductDetailsResponse>("/products/" + id);
};
