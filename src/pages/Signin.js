import React from 'react'
import { Link } from 'react-router-dom'
import './css/Signin.css'

const Signin = () => {
  return (
      <div className='signin'>
        <div className='form-wrapper'>
        <h1>Sign In</h1>
        <h4>Admins access only</h4>
        <form action="">
         <input type="email" placeholder='Email Address'/>
         <input type="password" placeholder='Password'/>
         <p>Forgot Password?</p>
        <div className='ckeck'><input type="checkbox" /><p>Remember me</p></div>
         <input type="submit" value="submitt" />
         
        </form>
    </div>
   </div>
  )
}

export default Signin