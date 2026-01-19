import { type FC } from "react";
import type {
  LinkFilmType,
  LinkPlanetFilmsType,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface LinkSectionProps {
  title: string;
  rootLinkAddress: "character" | "film";

  links: LinkFilmType[] | LinkPlanetFilmsType[];
}

//todo

export const LinkSection: FC<LinkSectionProps> = ({
  title,
  links,
  rootLinkAddress,
}) => {
  return (
    <section>
      <p>{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {"title" in link && rootLinkAddress === "film" ? (
              <p>{link.title}</p>
            ) : "name" in link ? (
              <p>{link.name}</p>
            ) : null}

            <Link to={`/${rootLinkAddress}/${link.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
