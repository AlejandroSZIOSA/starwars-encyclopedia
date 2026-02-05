//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import type { DataResVehicles } from "../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { Card } from "../../components/Card/Card";
import { Message } from "../../components/Message/Message";

export const VehiclesPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: vehicles,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResVehicles[]>(
    `vehicles?page=${page}&search=${encodeURIComponent(query)}`,
  );

  return (
    <div className="homePage__rootContainer">
      <div className="homePage_searchBar__rootContainer">
        <SearchBar
          value={query}
          placeholder="Search Vehicle..."
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
