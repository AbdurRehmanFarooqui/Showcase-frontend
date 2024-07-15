import React from 'react';
import LoginImages from './LoginImages';
export default function LoginImageStrip(props) {
  return (
    <div className={`LoginImageStrip ${props.animation}`} >
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
        <LoginImages/>
    </div>
  )
}
