import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilmsPage } from "./pages/Films";
import { PlanetsPage } from "./pages/Planets";
import { PeoplePage } from "./pages/People";
import { SpeciesPage } from "./pages/Species";
import { StarshipsPage } from "./pages/Starships";
import { StarshipDetailsPage } from "./pages/StarshipDetails";
import { VehiclesPage } from "./pages/Vehicles";
import { RootLayout } from "./layout/RootLayout";
import { DetailsFilmPage } from "./pages/DetailsFilm";
import { CharacterDetailsPage } from "./pages/CharacterDetails";
import { PlanetDetailsPage } from "./pages/PlanetDetails";
import { SpecieDetailsPage } from "./pages/SpecieDetails";
import { VehicleDetailsPage } from "./pages/VehicleDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", index: true, element: <FilmsPage /> },
        { path: "/film/:id", element: <DetailsFilmPage /> },
        { path: "/people", element: <PeoplePage /> },
        { path: "/character/:id", element: <CharacterDetailsPage /> },
        { path: "/planets", element: <PlanetsPage /> },
        { path: "/planet/:id", element: <PlanetDetailsPage /> },
        { path: "/species", element: <SpeciesPage /> },
        { path: "/specie/:id", element: <SpecieDetailsPage /> },
        { path: "/starships", element: <StarshipsPage /> },
        { path: "/starship/:id", element: <StarshipDetailsPage /> },
        { path: "/vehicles", element: <VehiclesPage /> },
        { path: "/vehicle/:id", element: <VehicleDetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
