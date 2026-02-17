//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { type DataResFilm } from "../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { Card } from "../../components/Card/Card";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const FilmsHomePage: FC = () => {
  // Custom hook thats manage some pagination and query logic
  const { pageParam, queryParam, setParams } = usePaginationParams();

  // Custom hook to fetch films with pagination and search logic
  const {
    data: films,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  } = useGetAndSearchAPI<DataResFilm[]>(
    `/films?page=${pageParam}&search=${encodeURIComponent(queryParam)}`,
  );

  return (
    <>
      <Header>
        <div className="homePage_searchBar__rootContainer">
          <SearchBar
            value={queryParam}
            placeholder="Search Film..."
            onChange={(value) => setParams({ query: value, page: 1 })}
          />
          <div className="homePage_paginationPanelDesktop__rootContainer">
            <PaginationPanel
              page={currentPage}
              onNext={() => {
                setParams({ page: currentPage + 1 });
              }}
              nextPageUrl={nextPage}
              onPrev={() =>
                setParams(prevPage ? { page: currentPage - 1 } : { page: 1 })
              }
            />
          </div>
        </div>
      </Header>
      <main>
        <ol>
          {loading ? (
            <Message message="Loading..." variant="loading" />
          ) : error ? (
            <Message message={error} variant="error" />
          ) : !films ? (
            <Message message="No films data." variant="info" />
          ) : films.length === 0 ? (
            <Message message="Not found." variant="loading" />
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
            page={currentPage}
            onNext={() => {
              setParams({ page: currentPage + 1 });
            }}
            nextPageUrl={nextPage}
            onPrev={() =>
              setParams(prevPage ? { page: currentPage - 1 } : { page: 1 })
            }
          />
        </div>
      </main>
    </>
  );
};
