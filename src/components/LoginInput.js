import React from 'react'

export default function LoginInput(props) {
  return (
    <div className='loginInput'>    
        <label className="loginInputLabel" for={props.label}>{props.label}</label>
        <input className='loginInputField' type={props.type} name={props.label}/>
    </div>
  )
}
