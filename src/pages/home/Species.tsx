//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { useGetHomeData } from "../../hooks/useGetHomeData";
import { type DataResSpecies } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { usePagination } from "../../hooks/usePagination";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const SpeciesHomePage: FC = () => {
  const { pageParam, queryParam, setParams } = usePagination();
  const {
    data: species,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  } = useGetHomeData<DataResSpecies[]>(
    `species?page=${pageParam}&search=${encodeURIComponent(queryParam)}`,
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
