import { useState, type FC } from "react";
import { type DataResBase, type DataResFilm } from "../services/ApiRes.types";
import { useAxiosGet } from "../hooks/useGetWithParams";
import { Card } from "../components/Card/Card";
import { ResultSection } from "../components/ResultSection/ResultSection";
import { useSearchParams } from "react-router-dom";
import { type ChangeEvent } from "react";

export const FilmsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //custom hook get api

  const { data, loading, error, nextPage, prevPage } = useAxiosGet<
    DataResBase<DataResFilm[]>
  >("GET_FILMS", `films?page=${currentPage}`);

  const { data: films } = data || {};

  //searchbar

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() ?? "";
  //

  console.log(films);

  const handleNextPage = () => {
    if (nextPage === null) return;
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (prevPage === null) return;
    setCurrentPage(currentPage - 1);
  };

  //serchbar
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredFilms = films?.filter((film) =>
    film.title.toLowerCase().includes(query),
  );
  //
  return (
    <>
      <h2>Films Page</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />

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
        ) : !filteredFilms || filteredFilms.length === 0 ? (
          <p>Empty List</p>
        ) : (
          filteredFilms.map((f) => <Card key={f.id} data={f} variant="film" />)
        )}
      </ResultSection>
    </>
  );
};
