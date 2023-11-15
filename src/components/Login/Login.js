import React from "react";
import { CtaButton, Input, SecondaryButton } from "../common";
import styles from "./Form.module.css";

export const Login = ({ toggleRegister, toggleLogin }) => {
  return (
    <div className={styles.container}>
      <Input placeholder="Email address" label="Email" />
      <Input placeholder="Password" label="Pasword" />

      <div className={styles.buttonsContainer}>
        <CtaButton text="Login" />
        <SecondaryButton
          text="Sign Up"
          onClick={() => {
            toggleRegister(true);
            toggleLogin(false);
          }}
        />
      </div>
    </div>
  );
};
