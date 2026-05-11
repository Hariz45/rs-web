import React from 'react'
import webdev from "../assets/webdev.svg"
import mobdev from "../assets/mobdev.svg"
import softdev from "../assets/softdev.svg"
import ecomm from "../assets/ecomm.svg"
import uiux from "../assets/uiux.svg"
import maintenance from "../assets/maintenance.svg"
import intern from "../assets/intern.svg"



const Service = () => {
  return (
    <section id='services'>
      <div>
        <div className='section-title'>
          <span>Our Sercvices</span>
          <h1>What We Offer</h1>
        </div>

        <div className='service-grid'>
          <div className='service-card'>
            <div>
              <img  src={webdev} alt="1" width={200} height={100} />
            </div>
            <h3>Web Development</h3>
            <p>Modern, responsive, and SEO-friendly business websites.</p>
          </div>

          <div className='service-card'>
            <div>
              <img  src={mobdev} alt="2" width={200} height={100} />
            </div>
            <h3>Mobile App Development</h3>
            <p>User-friendly mobile apps for Android and iOS platforms.</p>
          </div>

          <div className='service-card'>
            <div>
              <img  src={softdev} alt="3" width={200} height={100} />
            </div>
            <h3>Software Development</h3>
            <p>Modern, responsive, and SEO-friendly business websites.</p>
          </div>


          <div className='service-card'>
            <div>
              <img  src={ecomm} alt="4" width={200} height={100} />
            </div>
            <h3>E-commerce Solutions</h3>
            <p>Online stores with cart, payment, and order management.</p>
          </div>

          <div className='service-card'>
            <div>
              <img  src={uiux} alt="5" width={200} height={100} />
            </div>
            <h3>UI/UX Design</h3>
            <p>Clean and professional designs focused on user experience.</p>
          </div>

          <div className='service-card'>
            <div>
              <img  src={maintenance} alt="" width={200} height={100} />
            </div>
            <h3>Maintenance & Support</h3>
            <p>Reliable updates, bug fixes, and technical support.</p>
          </div>

          <div className='service-card'>
            <div>
              <img  src={intern} alt="" width={200} height={100} />
            </div>
            <h3>Internships & trainings</h3>
            <p>Real-time training and internships to boost your skills and career growth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service