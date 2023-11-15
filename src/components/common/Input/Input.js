import React from "react";
import "../../../assets/css/Inputs/MainInput.css";

export const Input = ({ placeholder, label,type,ref }) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};
