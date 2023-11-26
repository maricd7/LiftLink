import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import { CtaButton, Input } from "../../../common";
import { Icon } from "@iconify/react";

export const CreatePost = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  return (
    <div className={styles.createPostContainer}>
      <Icon
        onClick={onClick}
        className={styles.closeIcon}
        icon="ri:close-circle-line"
        color="#1d1d1d"
      />
      <h2 className={styles.createPostHeader}>Create Post</h2>
      <div className={styles.cpInputGroup}>
        <label>Title:</label>
        <Input
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className={styles.cpInputGroup}>
        <label>Title:</label>
        <textarea
          className={styles.cpTextArea}
          placeholder="Post..."
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        ></textarea>
      </div>
      <CtaButton text="Create a Post" />
    </div>
  );
};
