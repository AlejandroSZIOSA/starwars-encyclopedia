import { useEffect, useState } from "react";
import * as EncyclopediaAPIs from "../services/ApiRes";

export function useGetDetailsData<T>(params: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //fixed using generics infers the type T from the function call
        const resData = await EncyclopediaAPIs.getDetails<T>(params);
        setData(resData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error };
}
