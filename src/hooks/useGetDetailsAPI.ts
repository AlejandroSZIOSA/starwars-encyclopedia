import { useEffect, useState } from "react";
import * as EncyclopediaAPIs from "../services/ApiRes";

import type {
  DataResDetailsCharacter,
  DataResDetailsFilm,
  DataResDetailPlanet,
} from "../services/ApiRes.types";

type VariantType = "FILM" | "CHARACTER" | "PLANET";

type DataResTypes =
  | DataResDetailsFilm
  | DataResDetailsCharacter
  | DataResDetailPlanet; //TODO: Continue from here

export function useGetDetailsAPI<T extends DataResTypes>(
  variant: VariantType,
  params: number,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await EncyclopediaAPIs.getFilmDetails(params);
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
