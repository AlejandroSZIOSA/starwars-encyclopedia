// import type { ProductCtx } from "../types/shared";

/* export interface Product extends Pick<ProductCtx, "id" | "name" | "price"> {
  description?: string;
  images: { thumbnail: string; large: string };
} */

// types for requests payloads

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

interface DataResFilmsError {
  error: string;
}

export interface LinkFilmType extends Pick<DataResFilm, "id"> {
  name: string;
}

export interface DataResDetailFilm extends Omit<
  DataResFilm,
  "characters_count"
> {
  characters: LinkFilmType[];
  planets: LinkFilmType[];
  starships: LinkFilmType[];
  vehicles: LinkFilmType[];
  species: LinkFilmType[];
}

//People data type
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
  homeworld: {
    id: number;
    name: string;
  };
}

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

export type ResidentType = Omit<
  DataResPeople,
  "films_count" | "starships_count" | "vehicles_count" | "homeworld"
>;

export interface FilmType {
  id: number;
  title: string;
}

export interface DataResDetailPlanet extends Omit<
  DataResPlanet,
  "residents_count" | "films_count"
> {
  residents: ResidentType[];
  films: FilmType[];
}

/* export interface ProductOrderPayload {
  product_id: number;
  name: string;
  qty: number;
  item_price: number;
  item_total: number;
}

export interface UserOrderPayload {
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string;
  order_total: number;
  order_items: ProductOrderPayload[];
} */

//response types
/* type ResponseData<T> = {
  status: string;
  message?: string;
  data?: T;
};

type ErrorMessage = {
  [key: string]: string[];
};

type SuccessData = {
  id: number;
  user_id: number;
  order_date: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string;
  order_total: number;
  created_at: string;
  updated_at: string;
  order_items: ProductOrderPayload[];
}; */

/* export type ProductsResponse = ResponseData<Product[]>;
export type ProductDetailsResponse = ResponseData<Product>;
export type CreateOrderResponse = ResponseData<ErrorMessage | SuccessData>; */
