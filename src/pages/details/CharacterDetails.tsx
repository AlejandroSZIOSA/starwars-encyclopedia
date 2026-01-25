import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { DataResDetailsCharacter } from "../../services/ApiRes.types";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";

import type { Atribute } from "../../pages/details/DetailsFilm";

export const CharacterDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const navigate = useNavigate();

  const {
    data: character,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailsCharacter>("CHARACTER", numericId);

  const {
    image_url,
    name,
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    skin_color,
    homeworld,
    films,
    species,
    starships,
    vehicles,
  } = character || {};

  const atributes: Atribute[] = [
    { title: "Birth Year", value: birth_year },
    { title: "Eye Color", value: eye_color },
    { title: "Hair Color", value: hair_color },
    { title: "Height", value: height },
    { title: "Mass", value: mass },
    { title: "Skin Color", value: skin_color },
  ];

  return (
    <div className="detailsPage__rootContainer detailsPage_character___rootContainer">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <section className="detailsPage_intro__Section detailsPage_character_intro__Section">
            <h2>{name}</h2>
            <img src={image_url} alt={name} />
          </section>
          <AtributesSection atributeList={atributes} variant="details-page" />
          <section className="detailsPage_links__Section">
            <h3>
              <strong>Links</strong>
            </h3>
            <p>Homeworld: {homeworld?.name}</p>
            {films && films.length !== 0 && (
              <LinkSection title="Films" links={films} rootLinkAddress="film" />
            )}

            {species && species.length !== 0 && (
              <LinkSection
                title="Species"
                links={species}
                rootLinkAddress="specie"
              />
            )}

            {starships && starships.length !== 0 && (
              <LinkSection
                title="Starships"
                links={starships}
                rootLinkAddress="starship"
              />
            )}

            {vehicles && vehicles.length !== 0 && (
              <LinkSection
                title="Vehicles"
                links={vehicles}
                rootLinkAddress="vehicle"
              />
            )}
          </section>
          <div className="detailsPage_buttonBack__Container">
            <button
              className="detailsPage__ButtonBack"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};
