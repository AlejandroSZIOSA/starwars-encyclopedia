import { useParams } from "react-router-dom";
import type { DataResDetailPlanet } from "../../services/ApiRes.types";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";

import { useNavigate } from "react-router-dom";

import type { Atribute } from "./DetailsFilm";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";

export const PlanetDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const {
    data: planet,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailPlanet>("PLANET", numericId);

  const { name, diameter, climate, gravity, terrain, residents, films } =
    planet || {};

  const atributes: Atribute[] = [
    { title: "Diameter", value: diameter },
    { title: "Climate", value: climate },
    { title: "Gravity", value: gravity },
    { title: "Terrain", value: terrain },
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

          <AtributesSection atributeList={atributes} variant="mobile-ui" />

          <section className="detailsPage_relatedLinks__Section">
            <h3>Related Links</h3>
            {residents && residents.length !== 0 && (
              <LinkSection
                title="Residents"
                links={residents}
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
