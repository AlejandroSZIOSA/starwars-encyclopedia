import { useEffect, useState } from "react";
import * as EnciclopediaAPIs from "../services/ApiRes";

type VariantType = "FILMS" | "PEOPLE" | "PLANETS";

//TODO: extends generics

export function useGetAndSearchAPI<T>(operation: VariantType, params: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resData;
      try {
        if (operation === "FILMS") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getFilms(params);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "PEOPLE") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getPeople(params);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "PLANETS") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getPlanets(params);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        setData(resData as T);
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
