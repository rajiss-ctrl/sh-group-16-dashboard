import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button'

const Navbar = () => {
  return (
    <header>
        <div className="search">
           <div className="search-wrapper">
            <input type="search" placeholder='Search Team Members' />
            <FontAwesomeIcon icon={faSearch} className="fa-1x search-icon"></FontAwesomeIcon>
           </div>
            <div className="bell-wrapper">
            <FontAwesomeIcon icon={faBell} className="fa-2x bell"></FontAwesomeIcon>
            </div>
        </div>
        
      
    </header>
  )
}

export default Navbar