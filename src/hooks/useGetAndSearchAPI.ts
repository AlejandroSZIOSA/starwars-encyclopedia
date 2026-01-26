import { useEffect, useState } from "react";
import * as EnciclopediaAPIs from "../services/ApiRes";

type VariantType =
  | "FILMS"
  | "PEOPLE"
  | "PLANETS"
  | "SPECIES"
  | "STARSHIPS"
  | "VEHICLES";

export function useGetAndSearchAPI<T>(operation: VariantType, params: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (operation === "FILMS") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getFilms(params);

          setData(resData.data as T);
          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "PEOPLE") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getPeople(params);

          setData(resData.data as T);
          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "PLANETS") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getPlanets(params);

          setData(resData.data as T);
          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "SPECIES") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getSpecies(params);
          setData(resData.data as T);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "STARSHIPS") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getStarships(params);

          setData(resData.data as T);
          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "VEHICLES") {
          setLoading(true);
          const resData = await EnciclopediaAPIs.getVehicles(params);

          setData(resData.data as T);
          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }
      } catch (error) {
        console.log("Error fetching films:", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [operation, params]);

  return {
    data,
    loading,
    error,
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
  };
}
