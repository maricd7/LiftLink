import React from "react";
import { CtaButton, Input, SecondaryButton } from "../common";

export const Login = ({toggleRegister,toggleLogin}) => {
  return (
    <div>
      <Input placeholder="Email address" label="Email" />
      <Input placeholder="Password" label="Pasword" />

      <div className="buttons-container">
        <CtaButton text="Login" />
        <SecondaryButton text="Sign Up" onClick={()=>{toggleRegister(true); toggleLogin(false)}}/>
      </div>
    </div>
  );
};
