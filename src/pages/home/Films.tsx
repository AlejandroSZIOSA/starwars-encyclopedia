import { type FC } from "react";
import { type DataResFilm } from "../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { Card } from "../../components/Card/Card";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";

export const FilmsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();

  const {
    data: films,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResFilm[]>(
    "FILMS",
    `films?page=${page}&search=${encodeURIComponent(query)}`,
  );

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search film..."
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
        ) : !films || films.length === 0 ? (
          <p>Empty List</p>
        ) : (
          films.map((f) => (
            <li key={f.id}>
              <Card key={f.id} data={f} variant="film" />
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
