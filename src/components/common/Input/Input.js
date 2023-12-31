import React, { useRef } from "react";
import styles from './Input.module.css'; 



export const Input = ({ placeholder, label, type, reference, error,onChange}) => {

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{label}</label>
      <input className={styles.inputField} ref={reference} type={type} placeholder={placeholder} onChange={onChange}/>
      <div className={styles.error}>{error}</div>
    </div>
  );
};