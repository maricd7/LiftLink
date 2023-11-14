import React from 'react'

export const Input = ({placeholder ,label}) => {
  return (
    <div>
        <label>{label}</label>
        <input placeholder={placeholder}/>
    </div>
    
  )
}
