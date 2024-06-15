import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          line-height: 1.5;
          font-family: 'Poppins', sans-serif;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .container {
          max-width: 1170px;
          margin: auto;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
        }
        ul {
          list-style: none;
        }
        .footer {
          background-color: #002147;
          padding: 70px 0;
        }
        .footer-col {
          width: 33%;
          padding: 0 15px;
        }
        .footer-col h4 {
          font-size: 18px;
          color: #ffffff;
          text-align:left;
          text-transform: capitalize;
          margin-bottom: 35px;
          font-weight: 500;
          position: relative;
          font-family:Times new roman;
        }
        .footer-col h4::before {
        
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          background-color: #e91e63;
          height: 2px;
          box-sizing: border-box;
          width: 50px;
        }
        .footer-col ul li:not(:last-child) {
          margin-bottom: 20px;
        }
        .footer-col ul li a  {
          font-size: 20px;
          font-family:Times new roman;
          text-transform: capitalize;
          
          text-align:left;
          text-decoration: none;
          font-weight: 300;
          margin:3px;
          color: #bbbbbb;
          display: block;
          transition: all 0.3s ease;
        }
        .social-links{
        width:max-content;
        }
        li{
        margin-bottom:10px;
        }
        .f {
            font-size: 20px;
          font-family:Times new roman;
          text-transform: capitalize;
          
          text-align:left;
          text-decoration: none;
          font-weight: 300;
          margin:3px;
          color: #bbbbbb;
          display: block;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .footer-col ul li a:hover {
          color: #ffffff;
          padding-left: 8px;
        }
          
        .footer-col .social-links a {
    
          display: inline-block;
          height: 40px;
          width: 40px;
          left:0;
          background-color: rgba(255,255,255,0.2);
          margin: 0 10px 10px 0;
          text-align: center;
          line-height: 40px;
          border-radius: 50%;
          color: #ffffff;
          transition: all 0.5s ease;
        }
        .footer-col .social-links a:hover {
          color: #24262b;
          background-color: #ffffff;
        }
        /*responsive*/
        @media(max-width: 767px){
          .footer-col {
            width: 50%;
            margin-bottom: 30px;
          }
        }
        @media(max-width: 574px){
          .footer-col {
            width: 100%;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>LOGO MEDVISION</h4>
            <div>
              <p className='f'>MedVision Biomedicals Pvt. Ltd. - Revolutionizing clinical <br /> diagnostics with innovative solutions since 2011.</p>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US</h4>
            <ul>
              <li><a href="#"><i className="fas fa-phone-alt"></i> +91 9372564744</a></li>
              <li><a href="#"><i className="far fa-envelope"></i> email@gmail.com</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> address here here heree and then <br />there and over there and almost there <br /> and again here there you go!</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
