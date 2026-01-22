import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResDetailsFilm } from "../../../services/ApiRes.types";
import { LinkSection } from "../../../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../../../hooks/useGetDetailsAPI";

import styles from "./DetailsFilm.module.css";

export const DetailsFilmPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: film } = useGetDetailsAPI<DataResDetailsFilm>(
    "FILM",
    numericId,
  );

  const {
    image_url,
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
    <div className={styles.detailsFilmRootContainer}>
      <section className={styles.detailsFilmIntroSection}>
        <img src={image_url} alt={title} />
        <h2>{title}</h2>
        <article>
          <p>{opening_crawl}</p>
        </article>
      </section>
      <section className={styles.detailsFilmAttributesSection}>
        <h3>Atributes</h3>
        <p>
          <span>
            <strong>Episode </strong>
          </span>
          {episode_id}
        </p>
        <p>
          <span>
            <strong>Director: </strong>
          </span>
          {director}
        </p>
        <p>
          <span>
            <strong>Producer: </strong>
          </span>
          {producer}
        </p>
        <p>
          <span>
            <strong>Release Date: </strong>
          </span>
          {release_date}
        </p>
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
        {species && (
          <LinkSection
            title="Species"
            links={species}
            rootLinkAddress="specie"
          />
        )}
        {starships && (
          <LinkSection
            title="Starships"
            links={starships}
            rootLinkAddress="starship"
          />
        )}
        {vehicles && (
          <LinkSection
            title="Vehicles"
            links={vehicles}
            rootLinkAddress="vehicle"
          />
        )}
      </section>
    </div>
  );
};
