import { type FC } from "react";
import { Outlet } from "react-router-dom";
import NavBarRoot from "../components/navigation/NavBarRoot/NavBarRoot";
import styles from "./RootLayout.module.css";

export const RootLayout: FC = () => {
  return (
    <>
      <header>
        <h2 className={styles.headerTitle}>Star Wars Encyclopedia</h2>
        <NavBarRoot>
          <NavBarRoot.Item htmlAddress="/">Film</NavBarRoot.Item>
          <NavBarRoot.Item htmlAddress="/people">People</NavBarRoot.Item>
          <NavBarRoot.Item htmlAddress="/planets">Planets</NavBarRoot.Item>
          <NavBarRoot.Item htmlAddress="/species">Species</NavBarRoot.Item>
          <NavBarRoot.Item htmlAddress="/starships">Starships</NavBarRoot.Item>
          <NavBarRoot.Item htmlAddress="/vehicles">Vehicles</NavBarRoot.Item>
        </NavBarRoot>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
