import { useEffect, useState } from "react";
import * as FilmsAPI from "../services/ApiRes";

type VariantType = "FILMS" | "PEOPLE";

export function useGetAndSearch<T>(operation: VariantType, params?: string) {
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
          resData = await FilmsAPI.getFilms(params);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "PEOPLE") {
          setLoading(true);
          resData = await FilmsAPI.getPeople(params);

          setCurrentPage(resData.current_page);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        setData(resData as T);
        console.log("Fetched films:", resData);
      } catch (error) {
        console.log("Error fetching films:", error);
        setError((error as Error).message);
      } finally {
        //set loading to false
        console.log("Fetch attempt finished.");
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
