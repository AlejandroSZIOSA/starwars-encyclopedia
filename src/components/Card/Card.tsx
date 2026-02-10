//Fixed: Using type guards to ensure correct data handling based on the variant prop, and added a link to the details page for each card. This approach allows us to safely access properties specific to each data type while maintaining a clean and reusable card component.
import { type FC } from "react";
import type {
  DataResFilm,
  DataResPeople,
  DataResPlanet,
  DataResSpecies,
  DataResStarship,
  DataResVehicles,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";
import { AtributesSection } from "../AtributesSection/AtributesSection";
import styles from "./Card.module.css";

type CardData =
  | DataResFilm
  | DataResPeople
  | DataResPlanet
  | DataResSpecies
  | DataResStarship
  | DataResVehicles;

interface CardProps {
  data: CardData;
  variant: "film" | "character" | "planet" | "specie" | "starship" | "vehicle";
}
export const Card: FC<CardProps> = ({ data, variant }) => {
  const { id } = data; //extract any type ids

  //Using type guards
  function isFilm(data: unknown): data is DataResFilm {
    return (
      typeof data === "object" &&
      data !== null &&
      "episode_id" in data &&
      "release_date" in data
    );
  }

  //Using type guards
  function isCharacter(data: unknown): data is DataResPeople {
    return (
      typeof data === "object" &&
      data !== null &&
      "birth_year" in data &&
      "homeworld" in data
    );
  }

  //Using type guards
  function isPlanet(data: unknown): data is DataResPlanet {
    return (
      typeof data === "object" &&
      data !== null &&
      "climate" in data &&
      "terrain" in data
    );
  }

  //Using type guards
  function isSpecie(data: unknown): data is DataResSpecies {
    return (
      typeof data === "object" && data !== null && "classification" in data
    );
  }

  //Using type guards
  function isStarship(data: unknown): data is DataResStarship {
    return (
      typeof data === "object" &&
      data !== null &&
      "cost_in_credits" in data &&
      "model" in data
    );
  }

  //Using type guards
  function isVehicle(data: unknown): data is DataResVehicles {
    return (
      typeof data === "object" &&
      data !== null &&
      "cost_in_credits" in data &&
      "pilots_count" in data
    );
  }

  return (
    <div className={styles.cardRootContainer}>
      {variant === "film" && isFilm(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            {data.image_url && <img src={data.image_url} alt={data.title} />}

            <p>
              <strong>{data.title}</strong>
            </p>

            <hr />
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Episode", value: data.episode_id },
                { title: "Release Date", value: data.release_date },
                { title: "Characters", value: data.characters_count },
              ]}
            />
          </div>
        </>
      )}

      {variant === "character" && isCharacter(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            {data.image_url && <img src={data.image_url} alt={data.name} />}

            <p>{data.name}</p>

            <hr />
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Born", value: data.birth_year },
                {
                  title: "Homeworld",
                  value: data.homeworld?.name || "Unknown",
                },
              ]}
            />

            <p>
              In {data.films_count} <strong>films</strong>
            </p>
          </div>
        </>
      )}

      {variant === "planet" && isPlanet(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{data.name}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Climate", value: data.climate },
                { title: "Terrain", value: data.terrain },
                { title: "Residents", value: data.residents_count },
              ]}
            />
            <p>
              In {data.films_count} <strong>films</strong>
            </p>
          </div>
        </>
      )}

      {variant === "specie" && isSpecie(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{data.name}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Classification", value: data.classification },
                { title: "Designation", value: data.designation },
                { title: "People", value: data.people_count },
              ]}
            />
            <p>
              In {data.films_count} <strong>films</strong>
            </p>
          </div>
        </>
      )}

      {variant === "starship" && isStarship(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{data.name}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Model", value: data.model },
                { title: "Cost", value: data.cost_in_credits },
                { title: "Pilots", value: data.pilots_count },
              ]}
            />
            <p>
              In {data.films_count} <strong>films</strong>
            </p>
          </div>
        </>
      )}

      {variant === "vehicle" && isVehicle(data) && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{data.name}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection
              atributeList={[
                { title: "Model", value: data.model },
                { title: "Cost", value: data.cost_in_credits },
                { title: "Pilots", value: data.pilots_count },
              ]}
            />
            <p>
              In {data.films_count} <strong>films</strong>
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
