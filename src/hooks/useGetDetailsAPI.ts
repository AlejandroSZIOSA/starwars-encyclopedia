import { useEffect, useState } from "react";
import * as EnciclopediaAPIs from "../services/ApiRes";

import type { DataResDetailsFilm } from "../services/ApiRes.types";

type VariantType = "FILM" | "CHARACTER" | "PLANET";

type DataResTypes = DataResDetailsFilm | any; //TODO: Continue from here

export function useGetDetailsAPI<T>(variant: VariantType, params: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resData: DataResTypes;
      try {
        if (variant === "FILM") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getFilmDetails(params);
        }

        if (variant === "CHARACTER") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getCharacterDetails(params);
        }

        if (variant === "PLANET") {
          setLoading(true);
          resData = await EnciclopediaAPIs.getPlanetDetails(params);
        }

        setData(resData as T);
        /*  console.log("Fetched films:", resData); */
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
