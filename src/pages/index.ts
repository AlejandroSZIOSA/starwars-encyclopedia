import { FilmsHomePage } from "./home/Films";
import { PlanetsHomePage } from "./home/Planets";
import { PeopleHomePage } from "./home/People";
import { SpeciesHomePage } from "./home/Species";
import { StarshipsHomePage } from "./home/Starships";
import { VehiclesHomePage } from "./home/Vehicles";

import { DetailsFilmPage } from "./details/Film";
import { CharacterDetailsPage } from "./details/Character";
import { PlanetDetailsPage } from "./details/Planet";
import { SpecieDetailsPage } from "./details/Specie";
import { StarshipDetailsPage } from "./details/Starship";
import { VehicleDetailsPage } from "./details/Vehicle";

const HOME_PAGES = {
  FilmsHomePage,
  PlanetsHomePage,
  PeopleHomePage,
  SpeciesHomePage,
  StarshipsHomePage,
  VehiclesHomePage,
};

const DETAILS_PAGES = {
  FilmsHomePage,
  DetailsFilmPage,
  CharacterDetailsPage,
  PlanetDetailsPage,
  SpecieDetailsPage,
  StarshipDetailsPage,
  VehicleDetailsPage,
};

export { DETAILS_PAGES, HOME_PAGES };
