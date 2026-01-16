import { useEffect, useState } from "react";
import * as FilmsAPI from "../../services/ApiRes";

export function useAxiosGet<T>(operation: string, id?: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resData;
      try {
        if (operation === "GET_FILMS") {
          setLoading(true);
          resData = await FilmsAPI.getFilms();
        }
        if (operation === "GET_FILM_DETAILS") {
          setLoading(true);
          resData = await FilmsAPI.getFilmDetails(id!);
        }

        if (operation === "GET_PEOPLE") {
          setLoading(true);
          resData = await FilmsAPI.getPeople();
        }

        if (operation === "GET_PEOPLE_DETAILS") {
          setLoading(true);
          resData = await FilmsAPI.getPeopleDetails(id!);
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
  }, [operation]);

  return { data, loading, error };
}
