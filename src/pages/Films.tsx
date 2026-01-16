import type { FC } from "react";
import { type DataResBase, type DataResFilm } from "../services/ApiRes.types";
import { useAxiosGet } from "../components/hooks/useGetAxios";
import { Card } from "../components/Card/Card";

export const FilmsPage: FC = () => {
  const {
    data: dataRes,
    loading,
    error,
  } = useAxiosGet<DataResBase<DataResFilm[]>>("GET_FILMS");

  const { data } = dataRes || {};

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
          <Card key={film.id} movie={film} />
        ))}
      </ol>
    </>
  );
};
