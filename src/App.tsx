import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilmsPage } from "./pages/home/Films";
import { PlanetsPage } from "./pages/home/Planets";
import { PeoplePage } from "./pages/home/People";
import { SpeciesPage } from "./pages/home/Species";
import { StarshipsPage } from "./pages/home/Starships";
import { StarshipDetailsPage } from "./pages/details/StarshipDetails";
import { VehiclesPage } from "./pages/home/Vehicles";
import { RootLayout } from "./layout/RootLayout";
import { DetailsFilmPage } from "./pages/details/DetailsFilm";
import { CharacterDetailsPage } from "./pages/details/CharacterDetails";
import { PlanetDetailsPage } from "./pages/details/PlanetDetails";
import { SpecieDetailsPage } from "./pages/details/SpecieDetails";
import { VehicleDetailsPage } from "./pages/details/VehicleDetails";

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
