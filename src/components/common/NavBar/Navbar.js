import React from "react";
import { Logo } from "../Logo";
import styles from "./Navbar.module.css";
import { Search } from "../../Search";
import { Username } from "../../User";
import { CtaButton } from "../CtaButton";
export const Navbar = ({onClick}) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.searchUser}>
        <Search />
        <Username />
        <CtaButton text='Create Post' onClick={onClick}/>
      </div>
    </nav>
  );
};
