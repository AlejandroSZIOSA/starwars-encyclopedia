//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { SearchBar } from "../../components/searchbar/SearchBar";
import type { DataResVehicles } from "../../services/ApiRes.types";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { Card } from "../../components/Card/Card";

export const VehiclesPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: vehicles,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResVehicles[]>(
    "VEHICLES",
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
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !vehicles || vehicles.length === 0 ? (
          <p>Empty List</p>
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
