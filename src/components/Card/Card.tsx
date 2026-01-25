import { type FC } from "react";
import type {
  DataResFilm,
  DataResPeople,
  DataResPlanet,
  DataResSpecies,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";
import { AtributesSection } from "../AtributesSection/AtributesSection";

interface CardProps<T> {
  data: T;
  variant?: "film" | "character" | "planet" | "specie";
}

export const Card: FC<
  CardProps<DataResFilm | DataResPeople | DataResPlanet | DataResSpecies>
> = ({ data, variant }) => {
  const { id } = data;

  const { title, image_url, episode_id, release_date, characters_count } =
    data as DataResFilm;

  const filmAtributes = [
    { title: "Episode", value: episode_id },
    { title: "Release Date", value: release_date },
    { title: "Characters", value: characters_count },
  ];

  const {
    name,
    image_url: imageUrlCharacter,
    birth_year,
    homeworld,
    films_count,
  } = data as DataResPeople;

  const {
    name: namePlanet,
    climate,
    terrain,
    population,
  } = data as DataResPlanet;

  const {
    name: nameSpecies,
    classification,
    designation,
    language,
  } = data as DataResSpecies;

  return (
    <div className={styles.cardRootContainer}>
      {variant === "film" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            {image_url && <img src={image_url} alt={title} />}
            <p>
              <strong>{title}</strong>
            </p>
            <hr></hr>
          </div>

          <AtributesSection atributeList={filmAtributes} variant="films-card" />
          {/* <div className={styles.cardInnerDetailsContainer}>
            <p>
              <strong>Episode:</strong> {episode_id}
            </p>
            <p>
              <strong>Release Date:</strong> {release_date}
            </p>
            <p>
              <strong>Characters:</strong> {characters_count}
            </p>
          </div> */}
        </>
      )}
      {variant === "character" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            {imageUrlCharacter && <img src={imageUrlCharacter} alt={name} />}
            <p>{name}</p>
            <hr></hr>
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
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{namePlanet}</strong>
            </h3>
            <hr></hr>
          </div>
          <div className={styles.cardInnerDetailsContainer}>
            <p>
              <strong>Climate:</strong> {climate}
            </p>
            <p>
              <strong>Terrain:</strong> {terrain}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
          </div>
        </>
      )}
      {variant === "specie" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{nameSpecies}</strong>
            </h3>
            <hr></hr>
          </div>
          <div className={styles.cardInnerDetailsContainer}>
            <p>
              <strong>Classification:</strong> {classification}
            </p>
            <p>
              <strong>Designation:</strong> {designation}
            </p>
            <p>
              <strong>Language:</strong> {language}
            </p>
          </div>
        </>
      )}

      <div className={styles.cardButtonToDetailsContainer}>
        <Link to={`/${variant}/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};
