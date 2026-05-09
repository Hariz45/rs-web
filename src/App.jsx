import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About'
import Course from './pages/Course'
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Technology from './pages/Technology';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import whap from "./assets/whap.png"
import './index.css'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Course />
      <Service />
      <Portfolio />
      <Technology />
      <Career />
      <Blog />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/7604974617"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float">
        <img src={whap} alt="whatsapp" className='whatsapp-icon' />
      </a>
    </div>
  )
}

export default App