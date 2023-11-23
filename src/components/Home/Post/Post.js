import React from "react";
import styles from "./Post.module.css";
export const Post = ({postName,postCreator,topics,postSummary}) => {
  return (
    <div className={styles.postContainer}>
      <h3 className={styles.postName}>Increase Strength</h3>
      <h4 className={styles.postCreatorName}>Post Creator</h4>
      <ul className={styles.topicsList}>
          <li>Core</li>
          <li>Strength</li>
          <li>Conditioning</li>
      </ul>
      <p>
        Lorem ipsum post this is a post that someone can write and publish for
        others to read about some topics.
      </p>
    </div>
  );
};
