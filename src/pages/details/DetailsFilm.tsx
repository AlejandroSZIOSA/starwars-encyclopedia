//IMPORTANT: This page model is similar to other [details pages] (Character, Planet, Starship, Vehicle, Specie)
import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { DataResDetailsFilm } from "../../services/ApiRes.types";
import { LinkSection } from "../../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../../hooks/useGetDetailsAPI";
import { AtributesSection } from "../../components/AtributesSection/AtributesSection";

export type Atribute = {
  title: string;
  value?: string | number;
};

export const DetailsFilmPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const {
    data: film,
    loading,
    error,
  } = useGetDetailsAPI<DataResDetailsFilm>("FILM", numericId);

  const {
    image_url,
    title,
    opening_crawl,
    episode_id,
    director,
    producer,
    release_date,
    characters,
    planets,
    species,
    starships,
    vehicles,
  } = film || {};

  const atributes: Atribute[] = [
    { title: "Episode", value: episode_id },
    { title: "Director", value: director },
    { title: "Producer", value: producer },
    { title: "Release Date", value: release_date },
  ];

  return (
    <div className="detailsPage__rootContainer">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <section className="detailsPage_intro__Section">
            <img src={image_url} alt={title} />
            <h2 className="detailsPage_introMobile__Title">{title}</h2>
            <article>
              <h2 className="detailsPage_introDesktop__Title">{title}</h2>
              <p>{opening_crawl}</p>
            </article>
          </section>

          <AtributesSection atributeList={atributes} variant="mobile-ui" />

          <section className="detailsPage_relatedLinks__Section">
            <h3>Related Links</h3>
            {characters && characters.length !== 0 && (
              <LinkSection
                title="Characters"
                links={characters}
                rootLinkAddress="character"
              />
            )}
            {planets && planets.length !== 0 && (
              <LinkSection
                title="Planets"
                links={planets}
                rootLinkAddress="planet"
              />
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
