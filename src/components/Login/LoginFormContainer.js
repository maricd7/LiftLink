import React from 'react'
import { Input } from '../common'

export const LoginFormContainer = () => {
  return (
    <div>
      <h2>Let’s get started</h2> 
      <p>Login or register into your liftlink account.</p>
      <Input placeholder='Email address' label='Email'/>
      <Input placeholder='Password' label='Pasword'/>
    </div>
  )
}
