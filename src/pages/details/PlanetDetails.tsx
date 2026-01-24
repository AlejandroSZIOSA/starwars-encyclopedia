import { useParams } from "react-router-dom";
import type { DataResDetailPlanet } from "../../services/ApiRes.types";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";

export const PlanetDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: planet } = useGetDetailsAPI<DataResDetailPlanet>(
    "PLANET",
    numericId,
  );

  const { residents, films } = planet || {};

  console.log(planet);
  return (
    <>
      <h2>DetailPlanets</h2>
      <p>Related Links</p>
      {residents && (
        <LinkSection
          title="Residents"
          links={residents}
          rootLinkAddress="character"
        />
      )}
      {films && (
        <LinkSection title="Films" links={films} rootLinkAddress="film" />
      )}
    </>
  );
};
