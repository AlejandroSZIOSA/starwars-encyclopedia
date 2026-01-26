import { type FC } from "react";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { type DataResSpecies } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { usePaginationParams } from "../../hooks/usePaginationParams";

export const SpeciesPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: species,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResSpecies[]>(
    "SPECIES",
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
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !species || species.length === 0 ? (
          <p>Empty List</p>
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
