import React, { useRef, useState } from "react";
import { CtaButton, Input, SecondaryButton } from "../common";
import styles from "./Form.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = ({ toggleRegister, toggleLogin }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
   const navigate = useNavigate()

  const login = async () => {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password,
        navigate('./home')
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <Input placeholder="Email address" label="Email" reference={emailRef}/>
      <Input placeholder="Password" label="Pasword" reference={passwordRef}/>

      <div className={styles.buttonsContainer}>
        <CtaButton text="Login" onClick={login} type='button'/>
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
