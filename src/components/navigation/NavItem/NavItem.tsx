import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type NavItemProps = {
  htmlAddress: string;
  /* label: string; */
  children?: ReactNode;
};

export const NavItem: FC<NavItemProps> = ({ htmlAddress, children }) => {
  return (
    <li>
      <NavLink to={htmlAddress} style={{ textDecoration: "none" }}>
        {/* <p>{label}</p> */}
        {children}
      </NavLink>
    </li>
  );
};
