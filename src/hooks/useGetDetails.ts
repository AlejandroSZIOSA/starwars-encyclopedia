import { useEffect, useState } from "react";
import * as FilmsAPI from "../services/ApiRes";

type VariantType = "FILM" | "CHARACTER";

export function useGetDetails<T>(variant: VariantType, params: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resData;
      try {
        if (variant === "FILM") {
          setLoading(true);
          resData = await FilmsAPI.getFilmDetails(params);
        }

        if (variant === "CHARACTER") {
          setLoading(true);
          resData = await FilmsAPI.getCharacterDetails(params);
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
  }, [params, variant]);

  return { data, loading, error };
}
