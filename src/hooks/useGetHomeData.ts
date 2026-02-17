import { useEffect, useState } from "react";
import * as EnciclopediaAPIs from "../services/ApiRes";

export function useGetHomeData<T>(params: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //fixed: infers datatypes
        const resData = await EnciclopediaAPIs.getData<T>(params);
        setData(resData.data);
        setCurrentPage(resData.current_page);
        setNextPage(resData.next_page_url);
        setPrevPage(resData.prev_page_url);
      } catch (error) {
        console.log("Error fetching films:", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return {
    data,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  };
}
