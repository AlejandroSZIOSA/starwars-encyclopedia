import { type FC } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};
export const SearchBar: FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <input
      id="search-input"
      className={styles.searchBarInput}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      placeholder={placeholder}
    />
  );
};
