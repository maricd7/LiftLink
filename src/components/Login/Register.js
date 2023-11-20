import React, { useRef, useState } from "react";
import { Link,redirect ,useNavigate} from "react-router-dom";
import { CtaButton, Input } from "../common";
import styles from "./Form.module.css";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuth } from "../../contexts/AuthContext";
export const Register = ({ toggleLogin, toggleRegister }) => {

  const { setUser } = useAuth();
  const emailRegisterRef = useRef();
  const passwordRegisterRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const register = async (e) => {
    e.preventDefault();
    if (passwordRegisterRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRegisterRef.current.value,
        passwordRegisterRef.current.value,
      );
      const user = userCredential.user;
      console.log(user);
      setUser(user);
      navigate('/home')
    } catch (error) {
      console.log(error.message);
    }
  };

  
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
