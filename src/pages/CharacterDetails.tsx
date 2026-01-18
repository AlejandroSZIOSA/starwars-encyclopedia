import { type FC } from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/useGetWithParams";
import type { DataResPeople } from "../services/ApiRes.types";

export const CharacterDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: character } = useAxiosGet<DataResPeople>(
    "GET_CHARACTER_DETAILS",
    numericId,
  );

  console.log(character);
  return <div>PeopleDetails</div>;
};
