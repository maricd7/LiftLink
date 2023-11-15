import React from 'react'
import { Link } from 'react-router-dom'
import { CtaButton, Input } from '../common'


export const Register = ({toggleLogin, toggleRegister}) => {
  return (
    <div className='container'>
      <div className='form-text'>
        <h2>Register</h2> 
        <p>Sign up to LiftLink</p>
      </div>
      <Input placeholder='Email address' label='Email'/>
      <Input placeholder='Password' label='Pasword'/>

      <div className='buttons-container'>
        <CtaButton text='Sign Up'/>
        <p className='sign-in-parag' onClick={()=>{toggleLogin(true) ; toggleRegister(false)}}>Already have an account? Sign In</p>
      </div>
    </div>
  )
}
