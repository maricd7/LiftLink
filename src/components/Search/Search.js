import React from "react";
import { Icon } from "@iconify/react";
import styles from './Search.module.css';
export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Icon className={styles.searchIcon} icon="ri:search-2-line" color="#1d1d1d"/>
      <input className={styles.searchInput} placeholder="Search"></input>
    </div>
  );
};
