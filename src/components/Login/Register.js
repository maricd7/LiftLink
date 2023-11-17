import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CtaButton, Input } from "../common";
import styles from "./Form.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

export const Register = ({ toggleLogin, toggleRegister }) => {
  const emailRegisterRef = useRef();
  const passwordRegisterRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault()
    if (
      passwordRegisterRef.current.value !== passwordConfirmRef.current.value
    ) {
      return setError("Passwords do not match");
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRegisterRef.current.value,
        passwordRegisterRef.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = () => {};
  const logout = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.formText}>
        <h2>Register</h2>
        <p>Login or register into your liftlink account.</p>
      </div>
      <form onSubmit={register}>
        <Input
          placeholder="Email address"
          label="Email"
          type="email"
          reference={emailRegisterRef}
        />
        <Input
          placeholder="Password"
          label="Pasword"
          type="password"
          reference={passwordRegisterRef}
        />
        <Input
          error={error}
          placeholder="Confirm Password"
          label="Confirm Password"
          type="password"
          reference={passwordConfirmRef}
        />
        <div className={styles.buttonsContainer}>
          <p
            className="sign-in-parag"
            onClick={() => {
              toggleLogin(true);
              toggleRegister(false);
            }}
          >
            Already have an account? Sign In
          </p>
        </div>
        <CtaButton type="submit" text="Sign Up" />
      </form>
    </div>
  );
};
