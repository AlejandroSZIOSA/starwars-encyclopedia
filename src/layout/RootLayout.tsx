import { type FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import NavbarRoot from "../components/navigation/NavBarRoot/NavBarRoot";

export const RootLayout: FC = () => {
  return (
    <>
      <header>
        <h2 className={styles.headerTitle}>Star Wars Encyclopedia</h2>
        <NavbarRoot>
          <NavbarRoot.Item htmlAddress="/">Film</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/people">People</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/planets">Planets</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/species">Species</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/starships">Starships</NavbarRoot.Item>
          <NavbarRoot.Item htmlAddress="/vehicles">Vehicles</NavbarRoot.Item>
        </NavbarRoot>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
