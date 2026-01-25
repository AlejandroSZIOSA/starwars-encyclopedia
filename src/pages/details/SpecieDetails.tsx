import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";

import type { DataResDetailsSpecie } from "../../services/ApiRes.types";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";
import type { Atribute } from "./DetailsFilm";

export const SpecieDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const navigate = useNavigate();

  const {
    data: specie,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailsSpecie>("SPECIE", numericId);

  const { name, homeworld, average_lifespan, average_height, people, films } =
    specie || {};

  const atributes: Atribute[] = [
    { title: "Homeworld", value: homeworld?.name },
    { title: "Average Lifespan", value: average_lifespan },
    { title: "Average Height", value: average_height },
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
          </section>

          <AtributesSection atributeList={atributes} variant="details-page" />

          <section className="detailsPage_relatedLinks__Section">
            <h3>Related Links</h3>
            {people && people.length !== 0 && (
              <LinkSection
                title="Residents"
                links={people}
                rootLinkAddress="character"
              />
            )}
            {films && films.length !== 0 && (
              <LinkSection title="Films" links={films} rootLinkAddress="film" />
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
