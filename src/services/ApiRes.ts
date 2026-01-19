import axios from "axios";
import type {
  DataResBase,
  DataResDetailFilm,
  DataResFilm,
  DataResPeople,
  DataResPlanet,
} from "./ApiRes.types";

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

export const getFilms = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/films";
  return get<DataResBase<DataResFilm[]>>(endpoint);
};

export const getFilmDetails = async (id: number) => {
  return get<DataResDetailFilm>("/films/" + id);
};

export const getPeople = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/people";
  return get<DataResBase<DataResPeople[]>>(endpoint);
};

export const getCharacterDetails = async (id: number) => {
  return get<DataResPeople>("/people/" + id);
};

export const getPlanets = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/planets";
  return get<DataResBase<DataResPlanet[]>>(endpoint);
};

export const getPlanetDetails = async (id: number) => {
  return get<DataResPlanet>("/planets/" + id);
};
