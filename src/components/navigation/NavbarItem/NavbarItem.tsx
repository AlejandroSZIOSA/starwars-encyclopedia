import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type NavbarItemProps = {
  htmlAddress: string;
  children: ReactNode;
};

export const NavbarItem: FC<NavbarItemProps> = ({ htmlAddress, children }) => {
  return (
    <li>
      <NavLink to={htmlAddress} style={{ textDecoration: "none" }}>
        {children}
      </NavLink>
    </li>
  );
};
