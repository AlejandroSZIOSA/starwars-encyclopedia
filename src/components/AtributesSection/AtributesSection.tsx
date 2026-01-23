import { type FC } from "react";
import type { Atribute } from "../../pages/details/Film/DetailsFilm";

import styles from "./AtributesSection.module.css";

interface AtributesSectionProps {
  atributeList: Atribute[];
}

export const AtributesSection: FC<AtributesSectionProps> = ({
  atributeList,
}) => {
  return (
    <section className={styles.AtributesSection}>
      <h3 className={styles.titleTextMobile}>Atributes</h3>
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
