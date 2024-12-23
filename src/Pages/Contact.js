import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import Cc from '../components/Cc.js';

import * as textContent from '../data/textcontent.json'

function Contact() {
  const form = useRef();

  const {icons} = textContent;

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
    <div>
      
     
      
      <div className="contimgtop">
            <img src="/assets/back6.jpg" alt="Logistics" />
            
            <div className="overlay">
                <h1></h1>
                </div>
        </div>

      <div className="contact-info">
        <div className="title">Our Socials</div>
        <div className='contact_card'>
          {/* Map through the icondata array andrender a Cc component for each icon */}
          {icons.map((icon, index) => (
            <Cc key={index} icon={icon} />
          ))}
        </div>

        </div>

        <div className="cmap">
        <p>
          "Get to know us: <br />
          <span style={{ color: '#101027', fontWeight: 'bold' }}>Every Step Counts!</span>"
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120651.5921986694!2d72.83207488064981!3d19.091757485005584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c7ceb0000001%3A0x60cbc52fd09008e!2sOffice%20%23%2011%2C%20Anoto%20Industrial%20Estate%2C%20Adoni%20Compound%2C%20Nityanand%20Nagar%2C%20Ghatkopar%20(W%2C%20Mumbai%2C%20Maharashtra%20400086!3m2!1d19.0917758!2d72.9144766!5e0!3m2!1sen!2sin!4v1734967591239!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
      </div>

      <div className="contactus">
        <div className="top-text">
          <span style={{ color: '#1c0000', fontWeight: 'bold' }}>GET IN</span>
          <span style={{ color: '#101027', fontWeight: 'bold' }}>TOUCH</span>
        </div>


        <form ref={form} onSubmit={sendemail} className="contactus-elements">
          <div className="left-side">
            <input type="text" htmlFor="fname" name="fname" placeholder="First Name" />
            <input type="text" htmlFor="lname" name="lname" placeholder="Last Name" />
            <input type="email" htmlFor="email" name="email" placeholder="Email Address" />
            <input type="tel" htmlFor="number" name="number" maxLength="10" placeholder="Phone Number" />
          </div>
          <div className="right-side">
            <textarea rows="5" cols="70" className="textarena" name="msg" placeholder="Your text"></textarea>
          </div>
          <div className="contact-submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
