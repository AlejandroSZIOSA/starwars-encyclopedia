import { type FC } from "react";
import type { Atribute } from "../../pages/details/DetailsFilm";

import styles from "./AtributesSection.module.css";

interface AtributesSectionProps {
  atributeList: Atribute[];
  variant?: "mobile-ui";
}

export const AtributesSection: FC<AtributesSectionProps> = ({
  atributeList,
  variant,
}) => {
  return (
    <section className={styles.AtributesSection}>
      {variant === "mobile-ui" && (
        <h3 className={styles.titleTextMobile}>Atributes</h3>
      )}
      <ul>
        {atributeList?.map((atribute, index) => (
          <li key={index}>
            <p>
              <span>
                <strong>{atribute.title}: </strong>
              </span>
              {atribute.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
