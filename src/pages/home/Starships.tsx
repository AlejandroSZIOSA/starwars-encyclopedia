//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { usePagination } from "../../hooks/usePagination";
import { useGetHomeData } from "../../hooks/useGetHomeData";
import { type DataResStarship } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const StarshipsHomePage: FC = () => {
  const { pageParam, queryParam, setParams } = usePagination();
  const {
    data: starships,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  } = useGetHomeData<DataResStarship[]>(
    `starships?page=${pageParam}&search=${encodeURIComponent(queryParam)}`,
  );

  return (
    <>
      <Header>
        <div className="homePage_searchBar__rootContainer">
          <SearchBar
            value={queryParam}
            placeholder="Search starship..."
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
          ) : !starships ? (
            <Message message="No starships data." variant="info" />
          ) : starships.length === 0 ? (
            <Message message="Not found." variant="loading" />
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
