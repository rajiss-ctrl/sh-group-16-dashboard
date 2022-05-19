import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Signup.css'

const Signup = () => {
  const [form, setForm]=useState({
    name:"",
    email:"",
    password:""
  })

  useEffect(() => {
    
  }, [])

  const HandleSubmit = (e)=>{
    e.ptrvrnyDefault()
  }
  const HandleChange = ()=>{

  }
  
  return (
   <div className='signup'>
        <div className='form-wrapper'>
        <h1>Sign Up</h1>
        <form  onSubmit={HandleSubmit}>
         <input type="text" placeholder='Your Name' name='name' omChange={HandleChange} />
         <input type="email" placeholder='Email Address' name='email' omChange={HandleChange}/>
         <input type="password" placeholder='Password' name='password' omChange={HandleChange}/>
        <input type="submit" value="submitt" />
        </form>
        <Link to="/sign">Sign In</Link>
    </div>
   </div>
  )
}

export default Signup