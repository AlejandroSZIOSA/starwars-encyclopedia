import { type FC } from "react";
import type {
  LinkFilmBaseType,
  LinkFilmsType,
} from "../../services/ApiRes.types";
import { Link } from "react-router-dom";
import styles from "./LinkSection.module.css";

interface LinkSectionProps {
  title: string;
  rootLinkAddress:
    | "character"
    | "film"
    | "planet"
    | "specie"
    | "starship"
    | "vehicle";

  links: LinkFilmBaseType[] | LinkFilmsType[];
}

export const LinkSection: FC<LinkSectionProps> = ({
  title,
  links,
  rootLinkAddress,
}) => {
  return (
    <section className={styles.linkSectionRootContainer}>
      <p className={styles.titleText}>
        <strong>{title}</strong>
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={`/${rootLinkAddress}/${link.id}`}>
              {"title" in link && rootLinkAddress === "film" ? (
                <p>{link.title}</p>
              ) : "name" in link ? (
                <p>{link.name}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
