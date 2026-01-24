import { useEffect, useState } from "react";
import * as EncyclopediaAPIs from "../services/ApiRes";

type VariantType = "FILM" | "CHARACTER" | "PLANET";

export function useGetDetailsAPI<T>(variant: VariantType, params: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (variant === "FILM") {
          setLoading(true);
          const resData = await EncyclopediaAPIs.getFilmDetails(params);
          setData(resData as T);
        }

        if (variant === "CHARACTER") {
          setLoading(true);
          const resData = await EncyclopediaAPIs.getCharacterDetails(params);
          setData(resData as T);
        }

        if (variant === "PLANET") {
          setLoading(true);
          const resData = await EncyclopediaAPIs.getPlanetDetails(params);
          setData(resData as T);
        }
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
