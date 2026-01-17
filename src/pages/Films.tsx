import { useState, type FC } from "react";
import { type DataResBase, type DataResFilm } from "../services/ApiRes.types";
import { useAxiosGet } from "../components/hooks/useGetWithParams";
import { Card } from "../components/Card/Card";
import { ResultSection } from "../components/ResultSection/ResultSection";

export const FilmsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //custom hook get api

  const { data, loading, error, nextPage, prevPage } = useAxiosGet<
    DataResBase<DataResFilm[]>
  >("GET_FILMS", `films?page=${currentPage}`);

  const { data: films } = data || {};

  console.log(films);

  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }

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
      <h2>Films Page</h2>
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
        ) : !films ? (
          <p>Empty List</p>
        ) : (
          films.map((f) => <Card key={f.id} data={f} variant="film" />)
        )}
      </ResultSection>
    </>
  );
};
