import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CtaButton, Input } from '../common'
import styles from './Form.module.css'
import { useAuth } from '../../contexts/AuthContext'


export const Register = ({toggleLogin, toggleRegister}) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef(); 
    const signup = useAuth()

    function handleSubmit(e){
        e.preventDefault(); 
        
        signup(emailRef.current.value, passwordRef.current.value)
    }
  return (
    <div className={styles.container}>
      <div className={styles.formText}>
        <h2>Register</h2> 
        <p>Login or register into your liftlink account.</p>
      </div>
      <form>
      <Input placeholder='Email address' label='Email' type='email' ref={emailRef}/>
      <Input placeholder='Password' label='Pasword' type='password' ref={passwordRef}/>
      <Input placeholder='Confirm Password' label='Confirm Pasword' type='password' ref={passwordConfirmRef}/>
      <div className={styles.buttonsContainer}>
        <CtaButton type='submit' text='Sign Up' onClick={()=>{handleSubmit()}}/>
        <p className='sign-in-parag' onClick={()=>{toggleLogin(true) ; toggleRegister(false)}}>Already have an account? Sign In</p>
      </div>
      </form>
    </div>
  )
}
