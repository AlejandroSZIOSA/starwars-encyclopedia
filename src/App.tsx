import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilmsPage } from "./pages/Films";
import { PlanetsPage } from "./pages/Planets";
import { PeoplePage } from "./pages/People";
import { SpeciesPage } from "./pages/Species";
import { StarshipsPage } from "./pages/Starships";
import { VehiclesPage } from "./pages/Vehicles";
import { RootLayout } from "./layout/RootLayout";
import { DetailsFilmPage } from "./pages/DetailsFilm";
import { PeopleDetailsPage } from "./pages/PeopleDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", index: true, element: <FilmsPage /> },
        { path: "/films/:id", element: <DetailsFilmPage /> },
        { path: "/people", element: <PeoplePage /> },
        { path: "/people/:id", element: <PeopleDetailsPage /> },
        { path: "/planets", element: <PlanetsPage /> },
        { path: "/species", element: <SpeciesPage /> },
        { path: "/starships", element: <StarshipsPage /> },
        { path: "/vehicles", element: <VehiclesPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
