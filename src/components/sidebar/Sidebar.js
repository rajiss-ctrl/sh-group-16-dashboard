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
            <Link to="/sh-group-16-dashboard"><h4>Dashboard</h4></Link>
          </div>
          <div className="nav-list">
            <Link to="/sh-group-16-dashboard" className="home"><FontAwesomeIcon icon={faHome} className="fa-1x home-icon"></FontAwesomeIcon><p>Home</p></Link>
            <Link to="/teammember" className="group" ><FontAwesomeIcon icon={faUserGroup} className="fa-1x group-icon"></FontAwesomeIcon><p>Team Member</p></Link>
            <Link to="/clients" className='user' ><FontAwesomeIcon icon={faUser} className="fa-1x user-icon"></FontAwesomeIcon><p>Clients</p></Link>
            <Link to="/products" className='shop' ><FontAwesomeIcon icon={faBagShopping} className="fa-1x shop-icon"></FontAwesomeIcon><p>Products</p></Link>
            <Link to="/settings" className='setting'><FontAwesomeIcon icon={faSafari} className="fa-1x setting-icon"></FontAwesomeIcon><p>Settings</p></Link>
          </div>

          <div className='logout-wrapper'>
            <Link to='home' className='logout'><FontAwesomeIcon icon={faArrowLeft} className="fa-1x logout-icon"></FontAwesomeIcon><p>Logout</p></Link>
          </div>
      </ul>
    </nav>
  )
}

export default Sidebar