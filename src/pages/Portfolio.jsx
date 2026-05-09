import React from 'react'
import projects from "../assets/projects.svg"
import business from "../assets/business.png"
import online from "../assets/online.png"
import order from "../assets/order.png"
import social from "../assets/social.png"
import seo from "../assets/seo.png"
import email from "../assets/email.png"


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div>
        <div className='section-title'>
          <span>Portfolio</span>
          <h1>Our Recent Projects</h1>
        </div>
        <div className='portfolio-grid'>
          <div className='project-card'>
            <img src={business} alt="1" width={300} height={200} />
            <h3>Business ERP System</h3>
            <p>A complete business management platform developed using modern full stack technologies. The system includes employee management, sales tracking, analytics dashboard, secure authentication, and real-time reporting features for improving business operations.</p>

          </div>

          <div className='project-card'>
            <img src={online} alt="1" width={300} height={200} />
            <h3>Online Learning Platform</h3>
            <p>An interactive e-learning application that allows students to enroll in courses, watch video lessons, track progress, and attend online assessments. The platform provides admin controls, user authentication, and responsive UI for all devices.</p>

          </div>

          <div className='project-card'>
            <img src={order} alt="1" width={300} height={200} />
            <h3>Restaurant Ordering System</h3>
            <p>A smart food ordering application where users can browse menus, add items to cart, place orders, and track delivery status. The system includes admin dashboard, payment integration, and customer order management features.</p>

          </div>
        </div>










        <div className='portfolio-grid'>
          <div className='project-card'>
            <img src={social} alt="1" width={300} height={200} />
            <h3>Social Media Marketing Dashboard</h3>
            <p>A digital marketing dashboard designed to manage social media campaigns, monitor engagement, schedule posts, and analyze audience performance across multiple platforms with real-time insights.</p>

          </div>

          <div className='project-card'>
            <img src={seo} alt="1" width={300} height={200} />
            <h3>SEO Analytics Platform</h3>
            <p>A web-based SEO analytics system that helps businesses track keyword rankings, website traffic, search performance, and competitor analysis to improve online visibility and marketing growth.</p>

          </div>

          <div className='project-card'>
            <img src={email} alt="1" width={300} height={200} />
            <h3>Email Campaign Management System</h3>
            <p>A professional email marketing platform used to create, schedule, and monitor email campaigns. The system includes audience segmentation, campaign analytics, and automated marketing workflows.</p>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Portfolio