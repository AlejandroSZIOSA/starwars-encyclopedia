import { type FC } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={styles.searchBarInput}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search people..."
    />
  );
};
