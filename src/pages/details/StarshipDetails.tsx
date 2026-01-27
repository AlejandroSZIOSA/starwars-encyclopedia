//IMPORTANT:This page model is used in all [details pages]
import { type FC } from "react";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";
import type { DataResDetailsStarship } from "../../services/ApiRes.types";
import { useNavigate, useParams } from "react-router-dom";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";
import type { Atribute } from "./DetailsFilm";
import { Message } from "../../components/Message/Message";

export const StarshipDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const {
    data: starship,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailsStarship>("STARSHIP", numericId);

  const { name, model, starship_class, manufacturer, crew, pilots, films } =
    starship || {};

  const atributes: Atribute[] = [
    { title: "Model", value: model },
    { title: "Starship Class", value: starship_class },
    { title: "Manufacturer", value: manufacturer },
    { title: "Crew", value: crew },
  ];

  return (
    <>
      {loading ? (
        <Message message="Loading..." variant="loading" />
      ) : error ? (
        <Message message={error} variant="error" />
      ) : (
        <div className="detailsPage__rootContainer detailsPage_character___rootContainer">
          <section className="detailsPage_intro__Section detailsPage_character_intro__Section">
            <h2>{name}</h2>
          </section>

          <AtributesSection atributeList={atributes} variant="mobile-ui" />

          <section className="detailsPage_relatedLinks__Section">
            <h3>Related Links</h3>
            {pilots && pilots.length !== 0 && (
              <LinkSection
                title="Pilots"
                links={pilots}
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
        </div>
      )}
    </>
  );
};
