import { type FC } from "react";
import { useGetAndSearchAPI } from "../hooks/useGetAndSearchAPI";
import type { DataResBase, DataResPeople } from "../services/ApiRes.types";
import { Card } from "../components/Card/Card";
import { PaginationPanel } from "../components/Pagination/PaginationPanel";

import { usePaginationParams } from "../hooks/usePaginationParams";
import { SearchBar } from "../components/searchbar/SearchBar";

export const PeoplePage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const { data, loading, error, nextPage } = useGetAndSearchAPI<
    DataResBase<DataResPeople[]>
  >("PEOPLE", `people?page=${page}&search=${encodeURIComponent(query)}`);

  const { data: people } = data || {};

  return (
    <div>
      <h2>People Page</h2>
      <SearchBar
        value={query}
        onChange={(value) => setParams({ query: value, page: 1 })}
      />
      <ol>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !people || people.length === 0 ? (
          <p>Empty List</p>
        ) : (
          people.map((c) => <Card key={c.id} data={c} variant="character" />)
        )}
      </ol>

      <PaginationPanel
        page={page}
        onNext={() => {
          setParams({ page: page + 1 });
        }}
        nextPageUrl={nextPage}
        onPrev={() => setParams({ page: Math.max(1, page - 1) })}
      />
    </div>
  );
};
