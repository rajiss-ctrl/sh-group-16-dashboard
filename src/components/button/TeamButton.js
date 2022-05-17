import React from 'react';
import './Button.css'

const TeamButton = ({props}) => {
  return (
    <div>
        <button className="TeamButton"> {props}</button>
    </div>
  )
}

export default TeamButton