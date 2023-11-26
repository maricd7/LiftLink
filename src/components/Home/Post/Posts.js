import React from "react";
import { Post } from "./Post";
import styles from "./Post.module.css";

export const Posts = () => {
  return (
    <div className={styles.postsContainer}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
