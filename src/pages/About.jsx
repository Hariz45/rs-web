import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <span>About Us</span>
          <h1>Who We Are</h1>
        </div>

        <div className="about-grid">
          <div className="about-box">
            <h3>RW Software Solutions</h3>

            <p>
              About RW Software Solutions
              <br /><br />
              RW Software Solutions is a Coimbatore-based IT and digital solutions company dedicated to
              delivering smart technology services, practical learning, and career-focused opportunities
              for students, startups, and businesses. We provide complete IT services, digital solutions,
              online classes, and internship programs designed to support both business growth and skill
              development.
              <br /><br />
              Our IT services include website development, custom software solutions, UI/UX design,
              mobile-friendly business websites, cloud tools, technical support, and digital business
              solutions.
            </p>

            <details>
              <summary className="read-btn">Read More</summary>

              <p>
                We also offer digital marketing services such as SEO, social media management, branding,
                content creation, and lead generation to help businesses grow online.
                <br /><br />
                In addition to IT services, RW Software Solutions offers online classes for students and
                beginners who want to learn in-demand digital and technical skills. Our online training
                programs cover web development, digital marketing, AI tools, UI/UX design, business
                branding, and practical software skills with real-time project learning.
                <br /><br />
                We also provide internship programs designed to give students hands-on industry
                experience through live projects, practical training, and professional mentorship. Our
                internship opportunities help students gain real-world exposure in web development,
                digital marketing, software development, business development, and modern IT tools.
                <br /><br />
                At RW Software Solutions, our mission is to bridge the gap between learning and industry
                by providing smart IT services, practical education, and career-building opportunities
                under one platform.
                <br /><br />
                RW Software Solutions - IT Services, Online Learning & Internship Opportunities.
              </p>
            </details>
          </div>

          <div className="features">
            <div className="feature">✓ Client-focused development approach</div>
            <div className="feature">✓ Clean UI and responsive design</div>
            <div className="feature">✓ Scalable and secure solutions</div>
            <div className="feature">✓ Long-term maintenance and support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About