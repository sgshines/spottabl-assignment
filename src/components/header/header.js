import React from 'react'
import logo from '../images/logo.png';
import "./header.css";
function header() {
  return (
    <div className='header'>
        <div className="header-logo">
            <img src={logo} alt="logo" className="header-logo-png"/>
        </div>
        <div className="header-text">
            <h2>YOUR SPOTTABL TEAM</h2>
            <h4>Spottabl supports you all throughout</h4>
        </div>
    </div>
  )
}

export default header