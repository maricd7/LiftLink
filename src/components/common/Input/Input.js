import React, { useRef } from "react";
import "../../../assets/css/Inputs/MainInput.css";


export const Input = ({ placeholder, label, type, reference, error,}) => {

  return (

    <div>
      <label>{label}</label>
      <input ref={reference} type={type} placeholder={placeholder}/>
      <div>{error}</div>
    </div>
  );
};