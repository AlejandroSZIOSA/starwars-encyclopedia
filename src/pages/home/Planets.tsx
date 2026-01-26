import { type FC } from "react";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { type DataResPlanet } from "../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";

export const PlanetsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: planets,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResPlanet[]>(
    "PLANETS",
    `planets?page=${page}&search=${encodeURIComponent(query)}`,
  );

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search Planet..."
          onChange={(value) => setParams({ query: value, page: 1 })}
        />
        <div className="homePage_paginationPanelDesktop__rootContainer">
          <PaginationPanel
            page={page}
            onNext={() => {
              setParams({ page: page + 1 });
            }}
            nextPageUrl={nextPage}
            onPrev={() => setParams({ page: Math.max(1, page - 1) })}
          />
        </div>
      </div>

      <ol>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !planets || planets.length === 0 ? (
          <p>Empty List</p>
        ) : (
          planets.map((p) => (
            <li key={p.id}>
              <Card key={p.id} data={p} variant="planet" />
            </li>
          ))
        )}
      </ol>

      <div className="homePage_paginationPanelMobile__rootContainer">
        <PaginationPanel
          page={page}
          onNext={() => {
            setParams({ page: page + 1 });
          }}
          nextPageUrl={nextPage}
          onPrev={() => setParams({ page: Math.max(1, page - 1) })}
        />
      </div>
    </div>
  );
};
