import { type FC } from "react";
import type {
  DataResFilm,
  DataResPeople,
  DataResPlanet,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface CardProps<T> {
  data: T;
  variant?: "film" | "character" | "planet";
}

export const Card: FC<
  CardProps<DataResFilm | DataResPeople | DataResPlanet>
> = ({ data, variant }) => {
  const { id } = data;
  const { title, episode_id, characters_count } = data as DataResFilm;
  const { name, homeworld, films_count } = data as DataResPeople;
  const { climate, terrain, population } = data as DataResPlanet;

  return (
    <div>
      {variant === "film" && (
        <>
          <p> Title:{title}</p>
          <p>Episode: {episode_id}</p>
          <p>Characters: {characters_count}</p>
        </>
      )}
      {variant === "character" && (
        <>
          <p> Name:{name}</p>
          <p>Homeworld: {homeworld.name}</p>
          <p>in {films_count} films</p>
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
