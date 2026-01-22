import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResDetailsCharacter } from "../../../services/ApiRes.types";
import { useGetDetailsAPI } from "../../../hooks/useGetDetailsAPI";
import { LinkSection } from "../../../components/LinkSection/LinkSection";

export const CharacterDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: character } = useGetDetailsAPI<DataResDetailsCharacter>(
    "CHARACTER",
    numericId,
  );

  const {
    name,
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    skin_color,
    films,
    species,
    starships,
    vehicles,
  } = character || {};

  return (
    <div>
      <h2>{name}</h2>
      <section>
        <h3>Attributes</h3>
        <p>Birth Year: {birth_year}</p>
        <p>Eye Color: {eye_color}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Skin Color: {skin_color}</p>
      </section>
      <section>
        <h3>
          <strong>Links</strong>
        </h3>
        <p>Homeworld: {character?.homeworld?.name}</p>
        {films && (
          <LinkSection title="Films" links={films} rootLinkAddress="film" />
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
