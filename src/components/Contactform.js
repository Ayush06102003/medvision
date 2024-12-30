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
        <h2>Place your order with us</h2>
        <form ref={form} onSubmit={sendemail} className="contact-form-element">
          <label htmlFor="fname">Full Name</label>
          <input type="text" name="fname" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />

          <label htmlFor="products">Products</label>
          <input type="text" name="subject" placeholder="Your Products Name(min:5)" required />

          <label htmlFor="phone">Phone No</label>
          <input type="tel" htmlFor="number" name="number" maxLength="10" placeholder="Phone Number" />

          <label htmlFor="address">Address</label>
          <textarea rows="5" name="message" placeholder="Write your Address" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      
        
        <div className="address-box">
          <div className="address-item">
            <img src="assets/location-pin.png" alt="" />
            <div className="address-text">
                <h3>Address</h3>
                <p>Office # 11, Anoto Industrial Estate, Nityanand Nagar, Ghatkopar (W), Mumbai -400086.</p>
            </div>
          </div>
          <div className="address-item">
          <img src="assets/phone3d.png" alt="" />
          <div className="address-text">
            <h3>Phone</h3>
            <p>+91 9833026036</p>
            <p>+91 8655030519</p>
            </div>
          </div>
          <div className="address-item">
          <img src="assets/gmail.png" alt="" />
          <div className="address-text">
            <h3>Email</h3>
            <p>sales@medvisions.in</p>
            <p>support@medvisions.in</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Contactform
