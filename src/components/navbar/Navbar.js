import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header>
        <div className="search">
           <div className="search-wrapper">
            <input type="search" placeholder='Search Team Memebers' />
            <FontAwesomeIcon icon={faSearch} className="fa-1x search-icon"></FontAwesomeIcon>
           </div>
            <div className="bell-wrapper">
            <FontAwesomeIcon icon={faBell} className="fa-2x bell"></FontAwesomeIcon>
            </div>
        </div>
        
            <button>Add Members</button>
      
    </header>
  )
}

export default Navbar