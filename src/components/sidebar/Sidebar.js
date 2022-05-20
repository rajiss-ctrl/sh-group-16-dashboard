import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.css' 
import {  faArrowLeft, faBagShopping, faHome,  faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
  return (
    <nav>
      <ul>
          <div className="dashboard">
            <Link to="/home"><h4>Dashboard</h4></Link>
          </div>
          <div className="nav-list">
            <Link to="/home" className="home"><FontAwesomeIcon icon={faHome} className="fa-1x home-icon"></FontAwesomeIcon><p>Home</p></Link>
            <Link to="/teammember" className="group" ><FontAwesomeIcon icon={faUserGroup} className="fa-1x group-icon"></FontAwesomeIcon><p>Team Member</p></Link>
            <Link to="/clients" className='user' ><FontAwesomeIcon icon={faUser} className="fa-1x user-icon"></FontAwesomeIcon><p>Clients</p></Link>
            <Link to="/products" className='shop' ><FontAwesomeIcon icon={faBagShopping} className="fa-1x shop-icon"></FontAwesomeIcon><p>Products</p></Link>
            <Link to="/settings" className='setting'><FontAwesomeIcon icon={faSafari} className="fa-1x setting-icon"></FontAwesomeIcon><p>Settings</p></Link>
          </div>

          <div className='login-wrapper'>
            <Link to='/signin' className='login'><FontAwesomeIcon icon={faArrowLeft} className="fa-1x login-icon"></FontAwesomeIcon><p>Login</p></Link>
          </div>
      </ul>
    </nav>
  )
}

export default Sidebar