import { type FC } from "react";
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search people..."
    />
  );
};
