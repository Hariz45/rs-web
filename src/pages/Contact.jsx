import React from 'react'

const Contact = () => {



  const handlewhatsapp = (e) => {
    e.preventDefault()


    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    const phoneNumber = "917604974617"

    const text = `
    Hello RW Software Solutions,

      I am contacting you through your website regarding your services and opportunities.
      name: ${name}
    email: ${email}
    subject: ${subject}
    message: ${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.location.assign(whatsappURL);
  }



  return (
    <section id="contact" className="contact-section">

      <div className="container">

        <div className="section-title">
          <span>Contact Us</span>
          <h1>Let's Build Something Great</h1>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <h1>Get in Touch</h1>

            <p>
              <strong>Email:</strong>
              info.rwsoftwaresolutions@gmail.com
            </p>

            <p>
              <strong>Phone:</strong>
              +91 7604974617
            </p>

            <p>
              <strong>Address:</strong>
              Eachanari, Coimbatore
            </p>

            <p>
              Have a project idea? Contact RW Software Solutions and let us help you turn it into a professional digital product.
            </p>

            <div className="map-box">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9848.868230788932!2d76.98223322823758!3d10.930643854483424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0036b220b3%3A0x715dba00255e1269!2sDRW%20Software%20Development!5e0!3m2!1sen!2sin!4v1777615402375!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

          <form onSubmit={handlewhatsapp} className="contact-form">

            <input
              type="text"
              placeholder="Your Name"

              required
            />

            <input
              type="email"

              placeholder="Your Email"
              required
            />

            <input
              type="text"

              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"

              required
            ></textarea>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact