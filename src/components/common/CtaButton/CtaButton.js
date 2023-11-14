import React from "react";
import styles from "./CtaButton.module.css";


export const CtaButton = ({ text }) => {
  return <button className={styles.ctaButton}>{text}</button>;
};
