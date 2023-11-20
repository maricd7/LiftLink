import React from "react";
import { LoginFormContainer, LoginText } from "../components/Login";
import "../assets/css/Landing/LandingMain.css";


export const Landing = () => {
  return (
      <div className="containerLanding">
        <LoginText />
        <LoginFormContainer />
      </div>
  );
};
