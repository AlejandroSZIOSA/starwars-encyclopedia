import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResDetailsFilm } from "../../../services/ApiRes.types";
import { LinkSection } from "../../../components/LinkSection/LinkSection";
import { useGetDetailsAPI } from "../../../hooks/useGetDetailsAPI";
import { AtributesSection } from "../../../components/AtributesSection/AtributesSection";

export type Atribute = {
  title: string;
  value?: string | number;
};

export const DetailsFilmPage: FC = () => {
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

          <AtributesSection atributeList={atributes} />

          <section className="detailsPage_relatedLinks__Section">
            <h3>Related Links</h3>
            {characters && (
              <LinkSection
                title="Characters"
                links={characters}
                rootLinkAddress="character"
              />
            )}
            {planets && (
              <LinkSection
                title="Planets"
                links={planets}
                rootLinkAddress="planet"
              />
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
        </>
      )}
    </div>
  );
};
