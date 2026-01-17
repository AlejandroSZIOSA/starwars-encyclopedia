import { useState, type FC } from "react";
import { useAxiosGet } from "../components/hooks/useGetWithParams";
import type { DataResBase, DataResPeople } from "../services/ApiRes.types";
import { ResultSection } from "../components/ResultSection/ResultSection";
import { Card } from "../components/Card/Card";

export const PeoplePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //custom hook get api
  const { data, nextPage, prevPage, loading, error } = useAxiosGet<
    DataResBase<DataResPeople[]>
  >("GET_PEOPLE", `people?page=${currentPage}`);

  const { data: people } = data || {};

  const handleNextPage = () => {
    if (nextPage === null) return;
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (prevPage === null) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h2>People Page</h2>
      <ResultSection
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !people ? (
          <p>Empty List</p>
        ) : (
          people.map((c) => <Card key={c.id} data={c} variant="character" />)
        )}
      </ResultSection>
    </>
  );
};
