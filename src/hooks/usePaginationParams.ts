import { useSearchParams } from "react-router-dom";

export function usePaginationParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") || "";

  const setParams = (params: { page?: number; query?: string }) => {
    const next = new URLSearchParams(searchParams);
    if (params.page !== undefined) {
      next.set("page", String(params.page));
    }
    if (params.query !== undefined) {
      if (params.query) {
        next.set("query", params.query);
      } else {
        next.delete("query");
      }
    }
    setSearchParams(next);
  };
  return { page, query, setParams };
}
