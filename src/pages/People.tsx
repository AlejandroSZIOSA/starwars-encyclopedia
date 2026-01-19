import { useState, type ChangeEvent, type FC } from "react";
import { useGetAndSearch } from "../hooks/useGetAndSearch";
import type { DataResBase, DataResPeople } from "../services/ApiRes.types";
import { ResultSection } from "../components/ResultSection/ResultSection";
import { Card } from "../components/Card/Card";
import { useSearchParams } from "react-router-dom";

export const PeoplePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //searchbar

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() ?? "";
  //

  //custom hook get api
  const { data, loading, error, nextPage, prevPage } = useGetAndSearch<
    DataResBase<DataResPeople[]>
  >("PEOPLE", `people?page=${currentPage}`);

  const { data: people } = data || {};

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

  const filteredPeople = people?.filter((person) =>
    person.name.toLowerCase().includes(query),
  );
  //

  return (
    <>
      <h2>People Page</h2>

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
        ) : !filteredPeople || filteredPeople.length === 0 ? (
          <p>Empty List</p>
        ) : (
          filteredPeople.map((c) => (
            <Card key={c.id} data={c} variant="character" />
          ))
        )}
      </ResultSection>
    </>
  );
};
