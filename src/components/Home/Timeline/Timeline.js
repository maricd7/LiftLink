import React from "react";
import { Post, Posts } from "../Post";
import styles from "./Timeline.module.css";

export const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <Posts />
    </div>
  );
};
