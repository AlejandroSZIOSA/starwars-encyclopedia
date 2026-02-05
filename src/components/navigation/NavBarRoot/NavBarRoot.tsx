import { type FC, type ReactNode } from "react";
import styles from "./NavBarRoot.module.css";

import { type NavItemProps } from "../NavItem/NavItem";
import { NavItem } from "../NavItem/NavItem";

type NavBarRootProps = {
  children: ReactNode;
};

type NavBarComponent = FC<NavBarRootProps> & {
  Item: FC<NavItemProps>;
};

const NavBarRoot: NavBarComponent = ({ children }) => {
  return (
    <nav>
      <ul className={styles.navBarInnerUl}>{children}</ul>
    </nav>
  );
};

NavBarRoot.Item = NavItem; //Add new property to the object :)
export default NavBarRoot;
