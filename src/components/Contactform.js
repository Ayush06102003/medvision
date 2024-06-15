import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactform.css'

function Contactform() {
    const form = useRef();
    const sendemail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ppk0vmq', 'template_ice0fzr', form.current, '0zFq7IhRjhjABvhlJ')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          console.log(form.current);
        e.target.reset();
      };
  return (
    <>
    <div className="contact-container">
      <div className="form-section">
        <h2>Tell us your Query</h2>
        <form ref={form} onSubmit={sendemail} className="contact-form-element">
          <label htmlFor="fname">Name</label>
          <input type="text" name="fname" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder="Your Email Subject" required />

          <label htmlFor="message">Message</label>
          <textarea rows="5" name="message" placeholder="Write your message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      {/* <div className="address-section"> */}
        
        <div className="address-box">
          <div className="address-item">
            <img src="assets/location-pin.png" alt="" />
            <div className="address-text">
                <h3>Address</h3>
                <p>52 Chambers St, NY 10007, United States of America.</p>
            </div>
          </div>
          <div className="address-item">
          <img src="assets/phone3d.png" alt="" />
          <div className="address-text">
            <h3>Phone</h3>
            <p>Local: 1-800-233-4455</p>
            <p>Mobile: 1-800-123-4875</p>
            </div>
          </div>
          <div className="address-item">
          <img src="assets/gmail.png" alt="" />
          <div className="address-text">
            <h3>Email</h3>
            <p>info@yourdomain.com</p>
            <p>support@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default Contactform
