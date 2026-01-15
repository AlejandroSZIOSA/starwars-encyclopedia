import type { FC } from "react";
import { type DataResBase } from "../services/ApiRes.types";
import { useAxiosGet } from "../components/hooks/useGetAxios";

export const FilmsPage: FC = () => {
  const { dataResBase, loading, error } = useAxiosGet<DataResBase>("GET_FILMS");

  const { data } = dataResBase || {};

  console.log(data);

  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h2>Films Page</h2>
      <ol>
        {data?.map((film) => (
          <li key={film.id}>
            {film.title} - Released on: {film.release_date}
          </li>
        ))}
      </ol>
    </>
  );
};
