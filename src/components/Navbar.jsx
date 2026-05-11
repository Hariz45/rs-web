import React, { useState } from 'react'
import logo from "../assets/logo.png"
import menubar from "../assets/menubar.png"


const Navbar = () => {

  const [open, SetOpen] = useState(false)

  const closemenu = () => {
    SetOpen(false);
  }

  return (
    <div className='nav-container'>
      
      <div className='logo-img'>
        <img src={logo} alt="company-logo" width="100" height="80" />
      </div>
      <div className='title-name'>
        RISE<span>WAVE</span>
      </div>
      

        <button className='menu-btn' onClick={()=> SetOpen(!open)}>
          <img src={menubar} alt="menu-bar-icon" className='menu-icon' />
        </button>
        <div className={open ? "nav-links active" : "nav-links"}
        >
          <a href="#home" onClick={closemenu}>Home</a>
          <a href="#about" onClick={closemenu}>About</a>
          <a href="#services" onClick={closemenu}>Services</a>
          <a href="#portfolio" onClick={closemenu}>Portfolio</a>
          <a href="#technology" onClick={closemenu}>Technology</a>
          <a href="#career" onClick={closemenu}>Career</a>
          <a href="#blog" onClick={closemenu}>Blog</a>
          <a href="#contact" onClick={closemenu}>Contact</a>
        </div>
      </div>
  )
}

export default Navbar