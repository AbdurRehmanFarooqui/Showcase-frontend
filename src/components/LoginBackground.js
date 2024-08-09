import React from 'react'

import LoginRightContainer from './login_signup/LoginRightContainer';
import LoginLeftContainer from './login_signup/LoginLeftContainer';

export default function LoginBackground(props) {
  return (
    <div className='LoginBackground
LoginBackground'>
    <LoginLeftContainer />
    <LoginRightContainer heading={props.heading}/>
</div>
  )
}
