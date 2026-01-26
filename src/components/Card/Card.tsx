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

interface CardProps<T> {
  data: T;
  variant?: "film" | "character" | "planet" | "specie" | "starship" | "vehicle";
}

export const Card: FC<
  CardProps<
    | DataResFilm
    | DataResPeople
    | DataResPlanet
    | DataResSpecies
    | DataResStarship
    | DataResVehicles
  >
> = ({ data, variant }) => {
  const { id } = data; //extract any type ids

  //prepare atributes for film variant
  const { title, image_url, episode_id, release_date, characters_count } =
    data as DataResFilm;
  const filmAtributes = [
    { title: "Episode", value: episode_id },
    { title: "Release Date", value: release_date },
    { title: "Characters", value: characters_count },
  ];

  //prepare atributes for character variant
  const {
    name,
    image_url: imageUrlCharacter,
    birth_year,
    homeworld,
    films_count,
  } = data as DataResPeople;
  const characterAtributes = [
    { title: "Born", value: birth_year },
    { title: "Homeworld", value: homeworld?.name || "Unknown" },
  ];

  //prepare atributes for planet variant
  const {
    name: namePlanet,
    climate,
    terrain,
    residents_count,
    films_count: films_countPlanet,
  } = data as DataResPlanet;
  const planetAtributes = [
    { title: "Climate", value: climate },
    { title: "Terrain", value: terrain },
    { title: "Residents", value: residents_count },
  ];

  //prepare atributes for specie variant
  const {
    name: nameSpecies,
    classification,
    designation,
    people_count,
    films_count: filmsCountSpecies,
  } = data as DataResSpecies;
  const specieAtributes = [
    { title: "Classification", value: classification },
    { title: "Designation", value: designation },
    { title: "People", value: people_count },
  ];

  //prepare atributes for starship variant
  const {
    name: nameStarship,
    model,
    cost_in_credits,
    pilots_count,
    films_count: films_countStarship,
  } = data as DataResStarship;
  const starshipAtributes = [
    { title: "Model", value: model },
    { title: "Cost", value: cost_in_credits },
    { title: "Pilots", value: pilots_count },
  ];

  //prepare atributes for vehicle variant
  const {
    name: nameVehicle,
    model: modelVehicle,
    cost_in_credits: costInCreditsVehicle,
    pilots_count: pilotsCountVehicle,
    films_count: filmsCountVehicle,
  } = data as DataResVehicles;
  const vehicleAtributes = [
    { title: "Model", value: modelVehicle },
    { title: "Cost", value: costInCreditsVehicle },
    { title: "Pilots", value: pilotsCountVehicle },
  ];

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

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection atributeList={filmAtributes} />
          </div>
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
            <AtributesSection atributeList={characterAtributes} />
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
            <AtributesSection atributeList={planetAtributes} />
            <p>
              In {films_countPlanet} <strong>films</strong>
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
            <AtributesSection atributeList={specieAtributes} />
            <p>
              In {filmsCountSpecies} <strong>films</strong>
            </p>
          </div>
        </>
      )}

      {variant === "starship" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{nameStarship}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection atributeList={starshipAtributes} />
            <p>
              In {films_countStarship} <strong>films</strong>
            </p>
          </div>
        </>
      )}
      {variant === "vehicle" && (
        <>
          <div className={styles.cardInnerIntroContainer}>
            <h3>
              <strong>{nameVehicle}</strong>
            </h3>
            <hr></hr>
          </div>

          <div className={styles.cardInnerDetailsContainer}>
            <AtributesSection atributeList={vehicleAtributes} />
            <p>
              In {filmsCountVehicle} <strong>films</strong>
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
