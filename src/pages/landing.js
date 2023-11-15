import React from "react";
import { LoginFormContainer, LoginText } from "../components/Login";
import "../assets/css/Landing/LandingMain.css";
import { AuthProvider } from "../contexts/AuthContext";

export const Landing = () => {
  return (
    <AuthProvider>
      <div className="containerLanding">
        <LoginText />
        <LoginFormContainer />
      </div>
    </AuthProvider>
  );
};
