export interface DataResBase<T> {
  current_page: number;
  data: T;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: [
    {
      url: null; //preguntar?
      label: string;
      active: boolean;
    },
  ];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface DataResFilm {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  image_url: string;
  created: string;
  edited: string;
  characters_count: number;
  planets_count: number;
  starships_count: number;
  vehicles_count: number;
  species_count: number;
}

export type LinkFilmBaseType = Pick<DataResFilm, "id"> & { name: string };

export interface DataResDetailsFilm extends Omit<
  DataResFilm,
  | "characters_count"
  | "planets_count"
  | "starships_count"
  | "vehicles_count"
  | "species_count"
> {
  characters: LinkFilmBaseType[];
  planets: LinkFilmBaseType[];
  starships: LinkFilmBaseType[];
  vehicles: LinkFilmBaseType[];
  species: LinkFilmBaseType[];
}

//People data type
type HomeworldType = LinkFilmBaseType;

export interface DataResPeople {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  wiki_link: string;
  image_url: string;
  affiliations: string[];
  created: string;
  edited: string;
  films_count: number;
  species_count: number;
  starships_count: number;
  vehicles_count: number;
  homeworld: HomeworldType | null;
}

export type LinkPeopleFilmsType = Pick<DataResFilm, "id" | "title">;
export type LinkMachinesType = Pick<DataResPeople, "id" | "name">;
export type LinkDataResSpecies = LinkMachinesType;

export interface DataResDetailsCharacter extends Omit<
  DataResPeople,
  "films_count" | "species_count" | "starships_count" | "vehicles_count"
> {
  films: LinkPeopleFilmsType[];
  species: LinkDataResSpecies[];
  starships: LinkMachinesType[];
  vehicles: LinkMachinesType[];
}

//planets
export interface DataResPlanet {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  edited: string;
  residents_count: number;
  films_count: number;
}

export type LinkResidentType = Omit<
  DataResPeople,
  "films_count" | "starships_count" | "vehicles_count" | "homeworld"
>;
export type LinkFilmsType = LinkPeopleFilmsType;

export interface DataResDetailPlanet extends Omit<
  DataResPlanet,
  "residents_count" | "films_count"
> {
  residents: LinkResidentType[];
  films: LinkFilmsType[];
}

//species
export interface DataResSpecies {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  created: string;
  edited: string;
  people_count: number;
  films_count: number;
  homeworld: HomeworldType | null;
}

type LinkSpeciesPeopleType = LinkMachinesType;
type LinkPilotType = LinkMachinesType;

export interface DataResDetailsSpecie extends Omit<
  DataResSpecies,
  "people_count" | "films_count"
> {
  people: LinkSpeciesPeopleType[];
  films: LinkFilmsType[];
}

//starships
export interface DataResStarship {
  id: number;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  created: string;
  edited: string;
  pilots_count: number;
  films_count: number;
}

export interface DataResDetailsStarship extends Omit<
  DataResStarship,
  "pilots_count" | "films_count"
> {
  pilots: LinkPilotType[];
  films: LinkFilmsType[];
}

//vehicles
export interface DataResVehicles {
  id: number;
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  created: string;
  edited: string;
  pilots_count: number;
  films_count: number;
}

export interface DataResDetailsVehicle extends Omit<
  DataResVehicles,
  "pilots_count" | "films_count"
> {
  pilots: LinkPilotType[];
  films: LinkFilmsType[];
}
