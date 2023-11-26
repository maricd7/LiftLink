import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import { CtaButton, Input } from "../../../common";
import { Icon } from "@iconify/react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../../utils/firebase";
import { useNavigate } from "react-router-dom";


export const CreatePost = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "posts");

  let navigate =  useNavigate()
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.email, id: auth.currentUser.uid },
    });
    onClick()
    navigate('/home');
  };
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
      <CtaButton text="Create a Post" onClick={createPost}/>
    </div>
  );
};
