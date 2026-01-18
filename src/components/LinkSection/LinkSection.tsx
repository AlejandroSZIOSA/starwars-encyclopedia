import { type FC } from "react";
import type { LinkData } from "../../services/ApiRes.types";
import { Link } from "react-router-dom";

interface LinkSectionProps {
  title: string;
  links: LinkData[];
}

export const LinkSection: FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <section>
      <p>{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <p>{link.name}</p>
            <Link to={`/character/${link.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
