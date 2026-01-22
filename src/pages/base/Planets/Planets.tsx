import { type FC } from "react";
import { SearchBar } from "../../../components/searchbar/SearchBar";
import { usePaginationParams } from "../../../hooks/usePaginationParams";
import type {
  DataResBase,
  DataResPlanet,
} from "../../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../../hooks/useGetAndSearchAPI";
import { Card } from "../../../components/Card/Card";
import { PaginationPanel } from "../../../components/PaginationPanel/PaginationPanel";

export const PlanetsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();

  const { data, loading, error, nextPage } = useGetAndSearchAPI<
    DataResBase<DataResPlanet[]>
  >("PLANETS", `planets?page=${page}&search=${encodeURIComponent(query)}`);

  const { data: planets } = data || {}; //TODO

  return (
    <>
      <h2>Planets Page</h2>
      <SearchBar
        value={query}
        placeholder="Search planet..."
        onChange={(value) => setParams({ query: value, page: 1 })}
      />

      <ol>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !planets || planets.length === 0 ? (
          <p>Empty List</p>
        ) : (
          planets.map((p) => <Card key={p.id} data={p} variant="planet" />)
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
    </>
  );
};
