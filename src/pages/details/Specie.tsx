//IMPORTANT:This page model is used in all [details pages]
import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailsData } from "../../hooks/useGetDetailsData";
import type { DataResDetailsSpecie } from "../../services/ApiRes.types";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";
import type { Atribute } from "./Film";
import { Message } from "../../components/Message/Message";
import Header from "../../components/Header/Header";

export const SpecieDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const {
    data: specie,
    loading,
    error,
  } = useGetDetailsData<DataResDetailsSpecie>("/species/" + numericId);

  const {
    name,
    homeworld,
    classification,
    designation,
    average_lifespan,
    average_height,
    language,
    people,
    films,
  } = specie || {};

  const atributes: Atribute[] = [
    { title: "Homeworld", value: homeworld?.name },
    { title: "Classification", value: classification },
    { title: "Designation", value: designation },
    { title: "Average Lifespan", value: average_lifespan },
    { title: "Average Height", value: average_height },
    { title: "Language", value: language },
  ];

  return (
    <>
      <Header />
      <main>
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
              {people && people.length !== 0 && (
                <LinkSection
                  title="Residents"
                  links={people}
                  rootLinkAddress="character"
                />
              )}
              {films && films.length !== 0 && (
                <LinkSection
                  title="Films"
                  links={films}
                  rootLinkAddress="film"
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
          </div>
        )}
      </main>
    </>
  );
};
