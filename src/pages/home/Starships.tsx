import { type FC } from "react";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { type DataResStarship } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";

export const StarshipsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: starships,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResStarship[]>(
    "STARSHIPS",
    `starships?page=${page}&search=${encodeURIComponent(query)}`,
  );

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search Starship..."
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
        ) : !starships || starships.length === 0 ? (
          <p>Empty List</p>
        ) : (
          starships.map((s) => (
            <li key={s.id}>
              <Card key={s.id} data={s} variant="starship" />
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
