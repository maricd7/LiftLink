import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CtaButton, Input } from '../common'
import styles from './Form.module.css'
import { useAuth, currentUser,} from '../../contexts/AuthContext'


export const Register = ({toggleLogin, toggleRegister}) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef(); 
    const signup = useAuth();
    const[error,setError] = useState('')
    const[loading,setLoading]= useState(false)

    async function handleSubmit(e){
      console.log(signup)
        e.preventDefault(); 
        console.log(emailRef.current.value, 'email')
        console.log(passwordRef.current.value, 'email')
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return(setError('Passwords dont match.'))
        }

        try{
          setError('');
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)

        }catch{
          setError('Failed to create account.')
        }
        setLoading(false)
    }
  return (
    <div className={styles.container}>
      <div className={styles.formText}>
        <h2>Register</h2> 
        <p>Login or register into your liftlink account.</p>
      </div>
      <form onSubmit={handleSubmit}>
      <Input placeholder='Email address' label='Email' type='email' reference={emailRef} />
      <Input placeholder='Password' label='Pasword' type='password' reference={passwordRef}/>
      <Input error={error} placeholder='Confirm Password' label='Confirm Password' type='password' reference={passwordConfirmRef}/>
      <div className={styles.buttonsContainer}>
       
        <p className='sign-in-parag' onClick={()=>{toggleLogin(true) ; toggleRegister(false)}}>Already have an account? Sign In</p>
      </div>
      <CtaButton disabled={loading} type='submit' text='Sign Up'/>
      </form>
    </div>
  )
}
