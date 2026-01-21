import { type FC } from "react";
import { type DataResBase, type DataResFilm } from "../services/ApiRes.types";
import { useGetAndSearchAPI } from "../hooks/useGetAndSearchAPI";
import { Card } from "../components/Card/Card";
import { usePaginationParams } from "../hooks/usePaginationParams";
import { SearchBar } from "../components/searchbar/SearchBar";
import { PaginationPanel } from "../components/Pagination/PaginationPanel";

import styles from "./Films.module.css";

export const FilmsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();

  const { data, loading, error, nextPage } = useGetAndSearchAPI<
    DataResBase<DataResFilm[]>
  >("FILMS", `films?page=${page}&search=${encodeURIComponent(query)}`);

  const { data: films } = data || {};

  return (
    <div className={styles.filmsPageRootContainer}>
      <div className={styles.searchBarContainer}>
        <SearchBar
          value={query}
          placeholder="Search films..."
          onChange={(value) => setParams({ query: value, page: 1 })}
        />
      </div>

      <ol>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !films || films.length === 0 ? (
          <p>Empty List</p>
        ) : (
          <li>
            {films.map((f) => (
              <Card key={f.id} data={f} variant="film" />
            ))}
          </li>
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
