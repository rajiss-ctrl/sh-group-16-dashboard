import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({props}) => {
  return (
    <header>
        <div className="search">
           <div className="search-wrapper">
            <input type="search" placeholder={props} />
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