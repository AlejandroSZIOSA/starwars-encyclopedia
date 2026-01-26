import { type FC } from "react";

interface MessageProps {
  message: string;
  variant: "loading" | "error";
}

export const Message: FC<MessageProps> = ({ message, variant }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};
