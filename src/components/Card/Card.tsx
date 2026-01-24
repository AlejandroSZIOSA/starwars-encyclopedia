import { type FC } from "react";
import type {
  DataResFilm,
  DataResPeople,
  DataResPlanet,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

interface CardProps<T> {
  data: T;
  variant?: "film" | "character" | "planet";
}

export const Card: FC<
  CardProps<DataResFilm | DataResPeople | DataResPlanet>
> = ({ data, variant }) => {
  const { id } = data;
  const { title, image_url, episode_id, release_date, characters_count } =
    data as DataResFilm;
  const {
    name,
    image_url: imageUrlCharacter,
    birth_year,
    homeworld,
    films_count,
  } = data as DataResPeople;
  const { climate, terrain, population } = data as DataResPlanet;

  return (
    <div className={styles.cardRootContainer}>
      {variant === "film" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <img src={image_url} alt={title} />
            <p>
              <strong>{title}</strong>
            </p>
          </div>
          <div className={styles.cardInnerDetailsContainer}>
            <p>
              <strong>Episode:</strong> {episode_id}
            </p>
            <p>
              <strong>Release Date:</strong> {release_date}
            </p>
            <p>
              <strong>Characters:</strong> {characters_count}
            </p>
          </div>
        </>
      )}
      {variant === "character" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            {imageUrlCharacter && <img src={imageUrlCharacter} alt={name} />}
            <p>{name}</p>
          </div>
          <div className={styles.cardInnerDetailsContainer}>
            <p>
              <strong>Born:</strong> {birth_year}
            </p>

            <p>
              <strong>Homeworld:</strong> {homeworld?.name}
            </p>
            <p>
              In {films_count} <strong>films</strong>
            </p>
          </div>
        </>
      )}
      {variant === "planet" && (
        <>
          <p> Name:{name}</p>
          <p>Climate: {climate}</p>
          <p>Terrain: {terrain}</p>
          <p>Population: {population}</p>
        </>
      )}

      <Link to={`/${variant}/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};
