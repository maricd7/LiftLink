import React from "react";
import { Icon } from "@iconify/react";
import styles from './Search.module.css';
export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Icon className={styles.searchIcon} icon="ri:search-2-line" color="#fefefe"/>
      <input className={styles.searchInput} placeholder="Search"></input>
    </div>
  );
};
