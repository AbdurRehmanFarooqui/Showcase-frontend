import React from 'react'
import LoginInput from './LoginInput'
export default function LoginRightContainer(props) {
    return (
        <div className='LoginRightContainer'>
            <h3 className='loginHeading'>{props.heading}</h3>
            <div className='container-loginInput'>
                <LoginInput label="First Name" type="text"></LoginInput>
            <LoginInput label="Last Name" type="text"></LoginInput>
            <LoginInput label="UserName" type="text"></LoginInput>
            <LoginInput label="Email" type="email"></LoginInput>
            <LoginInput label="Password" type="password"></LoginInput>
            <LoginInput label="Re-EnterPassword" type="password"></LoginInput>
            </div>
            <div className='container-p'>
                <p className='login-p'>Already Have An Account?</p><p className='login-p loginChange'>Login</p>
            </div>
            <button className='loginButton'>{props.heading}</button>
        </div>
    )
}
