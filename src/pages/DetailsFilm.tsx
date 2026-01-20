import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResDetailsFilm } from "../services/ApiRes.types";
import { LinkSection } from "../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../hooks/useGetDetailsAPI";

export const DetailsFilmPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: film } = useGetDetailsAPI<DataResDetailsFilm>(
    "FILM",
    numericId,
  );

  const {
    title,
    opening_crawl,
    episode_id,
    director,
    producer,
    release_date,
    characters,
    planets,
    species,
    starships,
    vehicles,
  } = film || {};

  console.log(film);
  return (
    <div>
      <section>
        <h2>{title}</h2>
        <article>
          <p>{opening_crawl}</p>
        </article>
      </section>
      <section>
        <h3>Atributes</h3>
        <p>Episode {episode_id}</p>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <p>Release Date: {release_date}</p>
      </section>

      <section>
        <h3>Related Links</h3>
        {characters && (
          <LinkSection
            title="Characters"
            links={characters}
            rootLinkAddress="character"
          />
        )}
        {planets && (
          <LinkSection
            title="Planets"
            links={planets}
            rootLinkAddress="planet"
          />
        )}
      </section>
    </div>
  );
};
