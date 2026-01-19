import { type FC } from "react";
import { useParams } from "react-router-dom";
import type { DataResPeople } from "../services/ApiRes.types";
import { useGetDetails } from "../hooks/useGetDetails";

export const CharacterDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: character } = useGetDetails<DataResPeople>(
    "CHARACTER",
    numericId,
  );

  console.log(character);
  return <div>PeopleDetails</div>;
};
