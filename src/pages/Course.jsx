import React from 'react'
import software from "../assets/software.svg"
import programing from "../assets/programing.svg"
import Ai from "../assets/Ai.svg"
import design from "../assets/design.svg"
import marketing from "../assets/marketing.svg"
import business from "../assets/business.svg"
import internship from "../assets/internship.svg"
import short from "../assets/short.svg"

const Course = () => {
  return (
    <section id="course">
      <div>
        <div className='section-title'>
          <span>Courses</span>
          <h1>Our Course Programs</h1>
        </div>
        <div className='course-grid'>

          <div className='course-card'>
            <div className='icon'>
              <img src={software} alt="cards1" width={200} height={100} />
            </div>
            <h3>Software Development</h3>
            <details>
              <summary>About Course</summary>
              <p>Full Stack, Frontend, Backend, MERN, Python, Java and PHP development courses.</p>
            </details>
            <select className="course-select">
              <option value="">Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={programing} alt="cards2" width={200} height={100} />
            </div>
            <h3>Programming Course</h3>
            <details>
              <summary>About Course</summary>
              <p>Learn Python, Java, C, C++, JavaScript and Data Structures with practical training.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={Ai} alt="cards3" width={200} height={100} />
            </div>
            <h3>AI & Data Courses</h3>
            <details>
              <summary>About Course</summary>
              <p>AI, Machine Learning, Data Science, Deep Learning basics and Python for AI & ML.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={design} alt="cards4" width={200} height={100} />
            </div>
            <h3>Web Design & UI/UX</h3>
            <details>
              <summary>About Course</summary>
              <p>UI/UX Design, Figma, responsive web design and portfolio website design.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={marketing} alt="cards5" width={200} height={100} />
            </div>
            <h3>Digital Marketing</h3>
            <details>
              <summary>About Course</summary>
              <p>SEO, social media marketing, Google Ads, Meta Ads, WhatsApp marketing and branding.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={business} alt="cards6" width={200} height={100} />
            </div>
            <h3>Business & Career</h3>
            <details>
              <summary>About Course</summary>
              <p>Freelancing, LinkedIn branding, resume building, interview preparation and career
                guidance.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={internship} alt="cards7" width={200} height={100} />
            </div>
            <h3>Internship Programs</h3>
            <details>
              <summary>About Course</summary>
              <p>SEO, social media marketing, Google Ads, Meta Ads, WhatsApp marketing and branding.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>

          <div className='course-card'>
            <div className='icon'>
              <img src={short} alt="cards8" width={200} height={100} />
            </div>
            <h3>Short-Term Courses</h3>
            <details>
              <summary>About Course</summary>
              <p>SEO, social media marketing, Google Ads, Meta Ads, WhatsApp marketing and branding.</p>
            </details>
            <select className="course-select">
              <option value=""disabled>Select Course Pricing</option>
              <option>Course cost : ₹1999</option>
              <option>Short-term cost : ₹999</option>
              <option>Internship cost : ₹999</option>
            </select>
            <div>
              <a href="#contact"><button className="course-card button">Enroll Now</button></a>
            </div>
          </div>
        </div>
        <div className='fea'>
            <h3 className="f-h3">⭐Course Features</h3>
            <p className="f-p">Online classes, live + recorded sessions, certificates, real-time projects and
              portfolio
              building.</p>
          </div>
      </div>
    </section>
  )
}

export default Course