import { type FC } from "react";
import type { Atribute } from "./DetailsFilm";
import type { DataResDetailsVehicle } from "../../services/ApiRes.types";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";
import { useNavigate, useParams } from "react-router-dom";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";

export const VehicleDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const {
    data: vehicle,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailsVehicle>("VEHICLE", numericId);

  const { name, vehicle_class, length, crew, passengers, pilots, films } =
    vehicle || {};

  const atributes: Atribute[] = [
    { title: "Vehicle Class", value: vehicle_class },
    { title: "Length", value: length },
    { title: "Crew", value: crew },
    { title: "Passengers", value: passengers },
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
        </>
      )}
    </div>
  );
};
