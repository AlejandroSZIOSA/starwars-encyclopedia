import { type FC } from "react";
import { type DataResFilm } from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface CardProps {
  movie: DataResFilm;
}

export const Card: FC<CardProps> = ({ movie }) => {
  const { id, title, episode_id } = movie;

  return (
    <div>
      <p> Title:{title}</p>
      <p>Episode: {episode_id}</p>
      <Link to={`/films/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};
