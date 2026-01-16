import { useState, type FC } from "react";
import { useAxiosGet } from "../components/hooks/useGetAxios";
import type { DataResBase, DataResPeople } from "../services/ApiRes.types";

export const PeoplePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  const {
    data: dataRes,
    loading,
    error,
  } = useAxiosGet<DataResBase<DataResPeople[]>>("GET_PEOPLE");
  const { data } = dataRes || {};

  console.log(data);

  return (
    <>
      <h2>People Page</h2>
      <section>
        <p>page: {currentPage}</p>
        <ol>
          {data?.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
        <button>Previous</button>
        <button>Next</button>
      </section>
    </>
  );
};
