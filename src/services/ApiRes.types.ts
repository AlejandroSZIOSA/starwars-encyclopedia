// import type { ProductCtx } from "../types/shared";

/* export interface Product extends Pick<ProductCtx, "id" | "name" | "price"> {
  description?: string;
  images: { thumbnail: string; large: string };
} */

// types for requests payloads

export interface DataResBase {
  current_page: 1;
  data: DataResFilm[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: [
    {
      url: null; //preguntar?
      label: string;
      active: boolean;
    }
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

type DataResDetailBase = Pick<DataResFilm, "id" | "title">;

interface DataResDetailFilm extends Omit<DataResFilm, "characters_count"> {
  characters: DataResDetailBase[];
  planets: DataResDetailBase[];
  starships: DataResDetailBase[];
  vehicles: DataResDetailBase[];
  species: DataResDetailBase[];
}

export interface ProductOrderPayload {
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
}

//response types
type ResponseData<T> = {
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
};

export type ProductsResponse = ResponseData<Product[]>;
export type ProductDetailsResponse = ResponseData<Product>;
export type CreateOrderResponse = ResponseData<ErrorMessage | SuccessData>;
