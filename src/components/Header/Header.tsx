import type { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import NavbarRoot from "../navigation/NavBarRoot/NavBarRoot";

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <div className={styles.innerLogoNavContainer}>
        <h2 className={styles.headerTitle}>Star Wars Encyclopedia</h2>
        <NavbarRoot>
          <NavbarRoot.Item htmlAddress="/">Films</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/people">People</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/planets">Planets</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/species">Species</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/starships">Starships</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/vehicles">Vehicles</NavbarRoot.Item>
        </NavbarRoot>
      </div>
      {children}
    </header>
  );
};

export default Header;
