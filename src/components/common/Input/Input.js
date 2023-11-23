import React, { useRef } from "react";
import styles from './Input.module.css'; 



export const Input = ({ placeholder, label, type, reference, error,}) => {

  return (

    <div>
      <label>{label}</label>
      <input ref={reference} type={type} placeholder={placeholder}/>
      <div className="error">{error}</div>
    </div>
  );
};