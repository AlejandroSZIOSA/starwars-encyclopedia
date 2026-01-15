import { type FC } from "react";
import { type DataResFilm } from "../../services/ApiRes.types";

interface CardProps {
  movie: DataResFilm;
}

export const Card: FC<CardProps> = ({ movie }) => {
  return (
    <div>
      <p>card view</p>
      {movie.title}
    </div>
  );
};
