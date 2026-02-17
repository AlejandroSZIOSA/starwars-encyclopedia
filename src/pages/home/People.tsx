//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { type DataResPeople } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const PeopleHomePage: FC = () => {
  const { pageParam, queryParam, setParams } = usePaginationParams();

  const {
    data: people,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  } = useGetAndSearchAPI<DataResPeople[]>(
    `people?page=${pageParam}&search=${encodeURIComponent(queryParam)}`,
  );

  return (
    <>
      <Header>
        <div className="homePage_searchBar__rootContainer">
          <SearchBar
            value={queryParam}
            placeholder="Search Character..."
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
          ) : !people ? (
            <Message message="No people data." variant="info" />
          ) : people.length === 0 ? (
            <Message message="Not found." variant="loading" />
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
