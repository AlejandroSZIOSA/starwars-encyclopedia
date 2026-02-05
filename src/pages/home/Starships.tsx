//IMPORTANT:This page model is used in all [home pages]
import { type FC } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { PaginationPanel } from "../../components/PaginationPanel/PaginationPanel";
import { usePaginationParams } from "../../hooks/usePaginationParams";
import { useGetAndSearchAPI } from "../../hooks/useGetAndSearchAPI";
import { type DataResStarship } from "../../services/ApiRes.types";
import { Card } from "../../components/Card/Card";
import { Message } from "../../components/Message/Message";

export const StarshipsPage: FC = () => {
  const { page, query, setParams } = usePaginationParams();
  const {
    data: starships,
    loading,
    error,
    nextPage,
  } = useGetAndSearchAPI<DataResStarship[]>(
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
