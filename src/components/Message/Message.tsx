import { type FC } from "react";
import styles from "./Message.module.css";

interface MessageProps {
  message: string;
  variant: "loading" | "error" | "info";
}

export const Message: FC<MessageProps> = ({ message, variant }) => {
  return (
    <div className={styles.messageRootContainer}>
      {variant === "loading" ? <h3>Loading...</h3> : <h3>{message}</h3>}
    </div>
  );
};
