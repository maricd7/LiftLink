import React from "react";
import "../../../assets/css/Inputs/MainInput.css";

export const Input = ({ placeholder, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};
