import React from 'react'
import { CtaButton, Input, SecondaryButton } from '../common'
import '../../assets/css/Form/Form.css'

export const LoginFormContainer = () => {
  return (
    <div className='container'>
      <div className='form-text'>
        <h2>Let’s get started</h2> 
        <p>Login or register into your liftlink account.</p>
      </div>
      <Input placeholder='Email address' label='Email'/>
      <Input placeholder='Password' label='Pasword'/>

      <div className='buttons-container'>
        <CtaButton text='Login'/>
        <SecondaryButton text='Sign Up'/>
      </div>
    </div>
  )
}
