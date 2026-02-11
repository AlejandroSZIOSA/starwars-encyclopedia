import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilmsHomePage } from "./pages/home/Films";
import { PlanetsHomePage } from "./pages/home/Planets";
import { PeopleHomePage } from "./pages/home/People";
import { SpeciesHomePage } from "./pages/home/Species";
import { StarshipsHomePage } from "./pages/home/Starships";
import { StarshipDetailsPage } from "./pages/details/Starship";
import { VehiclesHomePage } from "./pages/home/Vehicles";
import { RootLayout } from "./layout/RootLayout";
import { DetailsFilmPage } from "./pages/details/Film";
import { CharacterDetailsPage } from "./pages/details/Character";
import { PlanetDetailsPage } from "./pages/details/Planet";
import { SpecieDetailsPage } from "./pages/details/Specie";
import { VehicleDetailsPage } from "./pages/details/Vehicle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", index: true, element: <FilmsHomePage /> },
        { path: "/film/:id", element: <DetailsFilmPage /> },
        { path: "/people", element: <PeopleHomePage /> },
        { path: "/character/:id", element: <CharacterDetailsPage /> },
        { path: "/planets", element: <PlanetsHomePage /> },
        { path: "/planet/:id", element: <PlanetDetailsPage /> },
        { path: "/species", element: <SpeciesHomePage /> },
        { path: "/specie/:id", element: <SpecieDetailsPage /> },
        { path: "/starships", element: <StarshipsHomePage /> },
        { path: "/starship/:id", element: <StarshipDetailsPage /> },
        { path: "/vehicles", element: <VehiclesHomePage /> },
        { path: "/vehicle/:id", element: <VehicleDetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
