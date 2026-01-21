import { type FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  htmlAddress: string;
  label: string;
}

export const NavItem: FC<NavItemProps> = ({ htmlAddress, label }) => {
  return (
    <li>
      <NavLink to={htmlAddress}>
        <p>{label}</p>
      </NavLink>
    </li>
  );
};
