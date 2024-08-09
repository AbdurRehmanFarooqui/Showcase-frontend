import React from 'react'

export default function LoginInput(props) {
  return (
    <div className='loginInput'>    
        <label className="loginInputLabel" htmlFor={props.name}>{props.label}</label>
        <input className='loginInputField' type={props.type} name={props.name} value={props.value} autoComplete="off" onChange={props.onChange}/>
    </div>
  )
}