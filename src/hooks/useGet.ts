import { useEffect, useState } from "react";
import * as EnciclopediaAPIs from "../services/ApiRes";
import { usePaginationParams } from "./usePaginationParams";

export function useGetAndSearchAPI<T>(params: string) {
  const { page, setParams } = usePaginationParams(); // Use pagination params from URL
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  const fetchPage = async (page: number) => {
    try {
      setLoading(true);
      const resData = await EnciclopediaAPIs.getData<T>(
        `${params}&page=${page}`,
      );
      setData(resData.data);
      setNextPage(resData.next_page_url);
      setPrevPage(resData.prev_page_url);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page); // Fetch data whenever the page changes
  }, [params, page]);

  const goToPage = (newPage: number) => {
    setParams({ page: newPage }); // Update the page parameter in the URL
  };

  return {
    data,
    loading,
    error,
    currentPage: page,
    nextPage,
    prevPage,
    goToPage, // Function to navigate to a specific page
  };
}
