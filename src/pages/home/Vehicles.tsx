//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { type DataResVehicles } from "../../services/ApiRes.types";
import { useGetHomeData } from "../../hooks/useGetHomeData";
import { usePagination } from "../../hooks/usePagination";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { Card } from "../../components/Card/Card";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const VehiclesHomePage: FC = () => {
  const { pageParam, queryParam, setParams } = usePagination();

  const {
    data: vehicles,
    loading,
    error,
    currentPage,
    prevPage,
    nextPage,
  } = useGetHomeData<DataResVehicles[]>(
    `vehicles?page=${pageParam}&search=${encodeURIComponent(queryParam)}`,
  );

  return (
    <>
      <Header>
        <div className="homePage_searchBar__rootContainer">
          <SearchBar
            value={queryParam}
            placeholder="Search vehicle..."
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
          ) : !vehicles ? (
            <Message message="No vehicles data." variant="info" />
          ) : vehicles.length === 0 ? (
            <Message message="Not found." variant="loading" />
          ) : (
            vehicles.map((v) => (
              <li key={v.id}>
                <Card key={v.id} data={v} variant="vehicle" />
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
