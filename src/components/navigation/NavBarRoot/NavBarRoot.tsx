import { type FC, type ReactNode } from "react";
import styles from "./NavBarRoot.module.css";

import { type NavbarItemProps } from "../NavbarItem/NavbarItem";
import { NavbarItem } from "../NavbarItem/NavbarItem";

type NavbarRootProps = {
  children: ReactNode;
};

type NavbarRootComponent = FC<NavbarRootProps> & {
  Item: FC<NavbarItemProps>;
};

const NavbarRoot: NavbarRootComponent = ({ children }) => {
  return (
    <nav>
      <ul className={styles.navBarInnerUl}>{children}</ul>
    </nav>
  );
};

NavbarRoot.Item = NavbarItem; //Add new property to the object :)
export default NavbarRoot;
