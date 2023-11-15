import React from 'react'
import { Link } from 'react-router-dom'
import { CtaButton, Input } from '../common'
import styles from './Form.module.css'


export const Register = ({toggleLogin, toggleRegister}) => {
  return (
    <div className={styles.container}>
      <div className={styles.formText}>
        <h2>Register</h2> 
        <p>Login or register into your liftlink account.</p>
      </div>
      <Input placeholder='Email address' label='Email'/>
      <Input placeholder='Password' label='Pasword'/>

      <div className={styles.buttonsContainer}>
        <CtaButton text='Sign Up'/>
        <p className='sign-in-parag' onClick={()=>{toggleLogin(true) ; toggleRegister(false)}}>Already have an account? Sign In</p>
      </div>
    </div>
  )
}
