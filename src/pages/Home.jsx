import React from 'react'

const Home = () => {
  return (
    <section id='home' className='hero-bg'>
      <div className='hero-grid'>
        
        {/* GROUP 1: The Left Side */}
        <div className="hero-text-wrapper">
          <div className='h-desc'>Professional IT Solutions Company</div>
          <h1 className='h1-p'>
            We Build Smart Digital Solutions for <span className='h1-span'>Modern Businesses</span>
          </h1>
          <p className='h-p'>
            RW Software Solutions delivers clean, scalable, and user-friendly web, mobile, and software
            solutions that help businesses grow faster in the digital world.
          </p>
          <div className="hero-actions">
            <a href="#contact" className='btn-p'>Contact Us</a>
            <a href="#services" className='btn-v'>View Services</a>
          </div>
        </div>

        {/* GROUP 2: The Right Side (The Card) */}
        <div className="hero-card">
          <h3 className='hero-h3'>Why Choose RW?</h3>
          <div className="stat">
            <span className='span-text'>Projects Delivered</span><strong>50+</strong>
          </div>
          <div className="stat">
            <span className='span-text'>Client Satisfaction</span><strong>98%</strong>
          </div>
          <div className="stat">
            <span className='span-text'>Support</span><strong>24/7</strong>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home