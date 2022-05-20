import React from 'react'
import './Button.css'


const Button = ({props,handleClick}) => {
  return (
    <div>
        <button  onClick={handleClick} className="main-button">{props}</button>
    </div>
  )
}

export default Button