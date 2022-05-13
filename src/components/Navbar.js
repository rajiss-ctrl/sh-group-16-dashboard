import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav>
         <ul>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/dashboard"><h2>Dashboard</h2></Link>
        <Link to="/login" ><h2>Login</h2></Link>
      </ul>
    </nav>
  )
}

export default Navbar