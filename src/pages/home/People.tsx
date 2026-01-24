import { type FC } from "react";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import type { DataResBase, DataResPeople } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";

import { usePaginationParams } from "../../hooks/usePaginationParams";
import { SearchBar } from "../../components/searchbar/SearchBar";

export const PeoplePage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const { data, loading, error, nextPage } = useGetAndSearchAPI<
    DataResBase<DataResPeople[]>
  >("PEOPLE", `people?page=${page}&search=${encodeURIComponent(query)}`);

  const { data: people } = data || {};

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search films..."
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
        ) : !people || people.length === 0 ? (
          <p>Empty List</p>
        ) : (
          people.map((p) => (
            <li key={p.id}>
              <Card key={p.id} data={p} variant="character" />
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
