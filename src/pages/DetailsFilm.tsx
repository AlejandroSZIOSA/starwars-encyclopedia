import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResDetailFilm } from "../services/ApiRes.types";
import { LinkSection } from "../components/LinkSection/LinkSection";
import { useGetDetails } from "../hooks/useGetDetails";

export const DetailsFilmPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: film } = useGetDetails<DataResDetailFilm>("FILM", numericId);

  const { characters } = film || {};

  console.log(film);
  return (
    <>
      <h2>DetailFilms</h2>
      <p>Related Links</p>
      {characters && <LinkSection title="Characters" links={characters} />}
    </>
  );
};
