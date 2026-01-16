import { type FC } from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../components/hooks/useGetAxios";
import type { DataResPeople } from "../services/ApiRes.types";

export const PeopleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data, loading, error } = useAxiosGet<DataResPeople>(
    "GET_PEOPLE_DETAILS",
    numericId
  );

  console.log(data);
  return <div>PeopleDetails</div>;
};
