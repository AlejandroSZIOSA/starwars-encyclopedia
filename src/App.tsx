import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Importing multiple imports from the same file using a namespace import (PAGE) to organize them into categories (HOME_PAGES and DETAILS_PAGES). This way, we can easily access the different page components based on their type (home or details) and keep our imports clean and organized.
import * as PAGES from "./pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      /* element: <RootLayout />, */
      children: [
        { path: "/", index: true, element: <PAGES.HOME_PAGES.FilmsHomePage /> },
        { path: "/film/:id", element: <PAGES.DETAILS_PAGES.DetailsFilmPage /> },
        { path: "/people", element: <PAGES.HOME_PAGES.PeopleHomePage /> },
        {
          path: "/character/:id",
          element: <PAGES.DETAILS_PAGES.CharacterDetailsPage />,
        },
        { path: "/planets", element: <PAGES.HOME_PAGES.PlanetsHomePage /> },
        {
          path: "/planet/:id",
          element: <PAGES.DETAILS_PAGES.PlanetDetailsPage />,
        },
        { path: "/species", element: <PAGES.HOME_PAGES.SpeciesHomePage /> },
        {
          path: "/specie/:id",
          element: <PAGES.DETAILS_PAGES.SpecieDetailsPage />,
        },
        { path: "/starships", element: <PAGES.HOME_PAGES.StarshipsHomePage /> },
        {
          path: "/starship/:id",
          element: <PAGES.DETAILS_PAGES.StarshipDetailsPage />,
        },
        { path: "/vehicles", element: <PAGES.HOME_PAGES.VehiclesHomePage /> },
        {
          path: "/vehicle/:id",
          element: <PAGES.DETAILS_PAGES.VehicleDetailsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
