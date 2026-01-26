import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import styles from "./RootLayout.module.css";

export const RootLayout: FC = () => {
  return (
    <>
      <header>
        <h2 className={styles.headerTitle}>Star Wars Encyclopedia</h2>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
