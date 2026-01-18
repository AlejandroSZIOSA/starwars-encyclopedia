import { useEffect, useState } from "react";
import * as FilmsAPI from "../services/ApiRes";

export function useAxiosGet<T>(operation: string, params?: string | number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resData;
      try {
        if (operation === "GET_FILMS") {
          setLoading(true);
          resData = await FilmsAPI.getFilms(params as string);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "GET_FILM_DETAILS") {
          setLoading(true);
          resData = await FilmsAPI.getFilmDetails(params as number);
        }

        if (operation === "GET_PEOPLE") {
          setLoading(true);
          resData = await FilmsAPI.getPeople(params as string);
          setNextPage(resData.next_page_url);
          setPrevPage(resData.prev_page_url);
        }

        if (operation === "GET_CHARACTER_DETAILS") {
          setLoading(true);
          resData = await FilmsAPI.getCharacterDetails(params as number);
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

  return { data, loading, error, nextPage, prevPage };
}
