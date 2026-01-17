import { type FC } from "react";
import {
  type DataResFilm,
  type DataResPeople,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface CardProps<T> {
  data: T;
  variant?: "film" | "character";
}

export const Card: FC<CardProps<DataResFilm | DataResPeople>> = ({
  data,
  variant,
}) => {
  const { id, title, episode_id, name, birth_year } = data;

  return (
    <div>
      {variant === "film" && (
        <>
          <p> Title:{title}</p>
          <p>Episode: {episode_id}</p>
        </>
      )}
      {variant === "character" && (
        <>
          <p> Name:{name}</p>
          <p>Birth Year: {birth_year}</p>
        </>
      )}

      <Link to={`/${variant}/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};
