import React from "react";
import styles from "./CtaButton.module.css";


export const CtaButton = ({ text,type,onClick }) => {
  return <button onClick={onClick} type={type} className={styles.ctaButton}>{text}</button>;
};
