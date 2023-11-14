import React from 'react'
import { CtaButton, Input } from '../common'
import '../../assets/css/Form/Form.css'

export const LoginFormContainer = () => {
  return (
    <div className='container'>
      <h2>Let’s get started</h2> 
      <p>Login or register into your liftlink account.</p>
      <Input placeholder='Email address' label='Email'/>
      <Input placeholder='Password' label='Pasword'/>

      <div className='buttons-container'>
        <CtaButton text='Login'/>
      </div>
    </div>
  )
}
