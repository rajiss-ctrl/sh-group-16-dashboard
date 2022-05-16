import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.css' 
import { faBagShopping, faHome,  faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
  return (
    <nav>
         <ul>
        <div className="dashboard">
        <Link to="/dashboard"><h4>Dashboard</h4></Link>
        </div>
       <div className="nav-list">
        <Link to="/"><FontAwesomeIcon icon={faHome} className="fa-4x css"></FontAwesomeIcon><p>Home</p></Link>
        <Link to="/teammember" ><FontAwesomeIcon icon={faUserGroup} className="fa-4x css"></FontAwesomeIcon><p>Team Member</p></Link>
        <Link to="/clients" ><FontAwesomeIcon icon={faUser} className="fa-4x css"></FontAwesomeIcon><p>Clients</p></Link>
        <Link to="/products" ><FontAwesomeIcon icon={faBagShopping} className="fa-4x css"></FontAwesomeIcon><p>Products</p></Link>
        <Link to="/settings" ><FontAwesomeIcon icon={faSafari} className="fa-4x css"></FontAwesomeIcon><p>Settings</p></Link>
        {/* <Link to="/login" ><p>Login</p></Link> */}
       </div>

       <div style={{color:'white', position:'absolute', bottom:'30px'}}>
         <p>Logout</p>
       </div>
      </ul>
    </nav>
  )
}

export default Sidebar