import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Signup.css'

const Signup = () => {
   const [formValid, setFormValid] = useState(false)
  const [form, setForm]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:""
  })


  
  const handleChange = (e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }
  useEffect(()=>{
     if (
         form.name !== "" &&
         form.email !== "" &&
         form.password !== "" &&
         form.phoneNumber !== ""
      
     ){
         setFormValid(true)
     } else {
         setFormValid(false)
     }
 }, [form])

  const handleSubmit = (e)=>{
    e.preventDefault()
    sessionStorage.setItem('adminDetails',JSON.stringify({...form}))
    // window.location='/sh-group-16-dashboard'

      setTimeout(() => {
            window.location="/home"
        }, 5000);
  }

  
  return (
   <div className='signup'>
        <div className='form-wrapper'>
        <h1>Sign Up</h1>
        <form  onSubmit={handleSubmit}>
         <input type="text" placeholder='Your Name' name='name' onChange={handleChange} />
         <input type="email" placeholder='Email Address' name='email' onChange={handleChange}/>
         <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
         <input type="phone" placeholder='Phone Number' name='phoneNumber' onChange={handleChange}/>
        <input type="submit" value="submitt" />
        </form>
        <Link to="/sign">Sign In</Link>
    </div>
   </div>
  )
}

export default Signup