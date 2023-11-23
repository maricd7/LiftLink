import React, { useState } from 'react'
import { CtaButton, Input, SecondaryButton } from '../common'
import styles from './Form.module.css';
import { Login } from './Login'
import { Register } from './Register'

export const LoginFormContainer = () => {
  const [login, toggleLogin] = useState(true); 
  const [register,toggleRegister] = useState(false) ; 

  return (
    <div className={styles.container}>
      {login && (<div className={styles.formText}>
       <h2>Let’s get started</h2> 
        <p>Login or register into your liftlink account.</p>
      </div>)}
      {login && <Login  toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>}
      {register &&<Register toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>}
    </div>
  )
}
