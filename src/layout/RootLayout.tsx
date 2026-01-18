import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar/NavBar";

export const RootLayout: FC = () => {
  return (
    <>
      <header>
        Star Wars Encyclopedia <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
