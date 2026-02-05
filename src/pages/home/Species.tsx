//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { type DataResSpecies } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { Message } from "../../components/Message/Message";

export const SpeciesPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: species,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResSpecies[]>(
    `species?page=${page}&search=${encodeURIComponent(query)}`,
  );

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search Specie..."
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
          <Message message="Loading..." variant="loading" />
        ) : error ? (
          <Message message={error} variant="error" />
        ) : !species ? (
          <Message message="No species data." variant="info" />
        ) : species.length === 0 ? (
          <Message message="Not found." variant="loading" />
        ) : (
          species.map((s) => (
            <li key={s.id}>
              <Card key={s.id} data={s} variant="specie" />
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
