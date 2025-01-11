import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">

      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name' />
          <input type="email" name="" id=" " placeholder='Your EMail' />
          <input type="password" name="" id="" placeholder='password' />
          
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have an account?<span>Login</span></p>
       
      </div>
    </div>
  )
}

export default LoginSignUp