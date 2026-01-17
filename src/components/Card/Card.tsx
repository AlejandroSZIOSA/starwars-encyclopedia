import { type FC } from "react";
import type { DataResFilm, DataResPeople } from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface CardProps<T> {
  data: T;
  variant?: "film" | "character";
}

export const Card: FC<CardProps<DataResFilm | DataResPeople>> = ({
  data,
  variant,
}) => {
  const { id } = data;
  const { title, episode_id } = data as DataResFilm;
  const { name, birth_year } = data as DataResPeople;

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
