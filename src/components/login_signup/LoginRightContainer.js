import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginInput from './LoginInput';

export default function LoginRightContainer(props) {
    const handleLogin = () => {
        console.log('login Clicked')
    }
    const handleSignup = () => {
        console.log('signup Clicked')
    }

    const host = "http://localhost:5000"
    const [credentials, setCredentials] = useState({ fname: "", lname: "", uname: "", email: "", password: "", rpassword: "" })

    const [log, setLog] = useState({  email: "", password: ""})

    let navigate = useNavigate();

    const {fname, lname, uname, email, password, rpassword} = credentials;

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    
    const onChangelog = (e) => {
        setLog({ ...log, [e.target.name]: e.target.value })
    }

    const handleSubmitlog = async (e) =>{
        e.preventDefault();
        console.log(` email: ${log.email}, Password: ${log.password}`)
        const response = await fetch(`${host}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: log.email, password: log.password})
        })
        const json = await response.json();
        console.log(json)
        if (json.jwt) {
            // Save auth-token & Redirect
            localStorage.setItem("token", json.jwt)
            navigate('/')

        } else {
            console.log("error")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`name ${fname} and ${lname}, username: ${uname}, email: ${email}, Password: ${password}, RPassword: ${rpassword}`)
        const response = await fetch(`${host}/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: uname, email: email, password: password})
        })
        const json = await response.json();
        console.log(json)
        if (json.jwt) {
            // Save auth-token & Redirect
            localStorage.setItem("token", json.jwt)
            getUserdata()
            // navigate('/')

        } else {
            console.log("error")
        }
    }

    const getUserdata = async () => {
        const response = await fetch(`${host}/user/profile`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        const json = await response.json();
        console.log(json)
    }

    return (
        <form onSubmit={props.heading === 'Sign up' ? handleSubmit : handleSubmitlog } className='LoginRightContainer'>
            <h3 className='loginHeading'>{props.heading}</h3>
            <div className='container-loginInput'>
                {props.heading === 'Sign up' ? <>

                    <LoginInput label="First Name" value={fname} name="fname" type="text" onChange={onChange}></LoginInput>
                    <LoginInput label="Last Name" value={lname} name="lname" type="text" onChange={onChange}></LoginInput>
                    <LoginInput label="UserName" value={uname} name="uname" type="text" onChange={onChange}></LoginInput>
                    <LoginInput label="Email" value={email} name="email" type="email" onChange={onChange}></LoginInput>
                    <LoginInput label="Password" value={password} name="password" type="password" onChange={onChange}></LoginInput>
                    <LoginInput label="Re-EnterPassword" value={rpassword} name="rpassword" type="password" onChange={onChange}></LoginInput>

                </> : <>
                    <LoginInput label="Email" value={log.email} name="email" type="email" onChange={onChangelog}></LoginInput>
                    <LoginInput label="Password" value={log.password} name="password" type="password" onChange={onChangelog}></LoginInput>

                </>}
            </div>
            <div className='container-p'>
                <p className='login-p'>{props.heading === 'Sign up' ? 'Already Have An Account?' : 'Dont Have An Account?'}</p>
                <p className='login-p loginChange'>{props.heading === 'Sign up' ? <Link to="/login">login</Link> : <Link to="/signup">Sign up</Link>}</p>
            </div>
            <button className='loginButton' onClick={props.heading === 'Sign up' ? handleSignup : handleLogin}>{props.heading}</button>
        </form>
    )
}
