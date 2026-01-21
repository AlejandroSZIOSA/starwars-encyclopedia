import axios from "axios";
import type {
  DataResBase,
  DataResDetailsFilm,
  DataResFilm,
  DataResPeople,
  DataResPlanet,
  DataResSpecies,
  DataResStarship,
  DataResVehicle,
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

//endpoint functions
export const getFilms = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/films";
  return get<DataResBase<DataResFilm[]>>(endpoint);
};
export const getFilmDetails = async (id: number) => {
  return get<DataResDetailsFilm>("/films/" + id);
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

export const getSpecies = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/species";
  return get<DataResBase<DataResSpecies[]>>(endpoint);
};
export const getSpeciesDetails = async (id: number) => {
  return get<DataResSpecies>("/species/" + id);
};

export const getStarships = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/starships";
  return get<DataResBase<DataResStarship[]>>(endpoint);
};
export const getStarshipDetails = async (id: number) => {
  return get<DataResStarship>("/starships/" + id);
};

export const getVehicles = async (params?: string) => {
  const endpoint = params ? `/${params}` : "/vehicles";
  return get<DataResBase<DataResVehicle[]>>(endpoint);
};
export const getVehicleDetails = async (id: number) => {
  return get<DataResVehicle>("/vehicles/" + id);
};
