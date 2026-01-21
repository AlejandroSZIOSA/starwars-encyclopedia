import { type FC } from "react";
import { NavItem } from "../NavItem/NavItem";

import styles from "./NavBar.module.css";

export const NavBar: FC = () => {
  return (
    <nav>
      <ul className={styles.navBarInnerUl}>
        <NavItem htmlAddress="/" label="Films" />
        <NavItem htmlAddress="/people" label="People" />
        <NavItem htmlAddress="/planets" label="Planets" />
        <NavItem htmlAddress="/species" label="Species" />
        <NavItem htmlAddress="/starships" label="Starships" />
        <NavItem htmlAddress="/vehicles" label="Vehicles" />
      </ul>
    </nav>
  );
};
