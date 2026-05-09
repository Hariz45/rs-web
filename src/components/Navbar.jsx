import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav />
      <div className='logo-img'>
        <img  src={logo} alt="company-logo" width="100" height="80" />
      </div>
      <div className='title-name'>
        RISE<span>WAVE</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#course">Courses</a>
        <a href="#service">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#technology">Technologies</a>
        <a href="#career">Careers</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar