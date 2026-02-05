import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type NavItemProps = {
  htmlAddress: string;
  children: ReactNode;
};

export const NavItem: FC<NavItemProps> = ({ htmlAddress, children }) => {
  return (
    <li>
      <NavLink to={htmlAddress} style={{ textDecoration: "none" }}>
        {children}
      </NavLink>
    </li>
  );
};
