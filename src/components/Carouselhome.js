import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Carouselhome() {
  return (
    <div className="carousel-container1">
      <style>{`
        .carousel-container1 {
          height: 90vh;
          overflow: hidden;
          margin-bottom: 5%;
           /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(29, 38, 113, 0.8),rgba(20,81, 100, 0.5));
    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(20,81, 100, 0.5));
        }

        .carousel-item img {
          height: 100vh;
          
        object-fit: cover;
        transition-duration: 6s;
        opacity:0.6;
        }

        .carousel-caption {
          position: absolute;
          left: 10%;
          bottom: 10%;
         width:60%;
          line-spacing: 0;
          z-index:2;
          transform: translateX(-50%);
          text-align: justify;
          animation: slideInRight 2s forwards;
        }
          
        .carousel-caption h1{
        font-family:times new roman;
        font-size:4rem;
        font-weight:bold;
        
        }

        .carousel-caption p{
        font-family:times new roman;
        font-size:2rem;
        font-weight:bold;}
      

      .carousel-inner {
     
          transition: transform 5s ease-in-out;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(15%);
            opacity: 1;
          }
        }

       @media (max-width: 800px) {
       .carousel-caption {
          position: absolute;
          left: 10%;
          bottom: 20%;
          
      }
          
        .carousel-caption h1{
        font-family:times new roman;
        font-size:3rem;
        font-weight:bold;
        }

        .carousel-caption p{
        font-family:times new roman;
        font-size:1.6rem;
        font-weight:bold;}

       }
        

        }
      `}</style>
      <Carousel interval={4000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homepage_top.jpg"
            alt="JAVA"
          />
          <Carousel.Caption className="caption-animation">
            <h1>MedVision BioMedicals</h1>
            <p>Innovating Advanced Healthcare Solutions for Leading Hospitals</p>
            <Button variant="outline">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homepage_top.jpg"
            alt="HTML"
          />
          <Carousel.Caption className="caption-animation">
          <h1>MedVision BioMedicals</h1>
            <p>Trusted by Hospitals Nationwide for Cutting-Edge Equipment.</p>
            <Button variant="outline">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homepage_top.jpg"
            alt="Angular"
          />
          <Carousel.Caption className="caption-animation">
          <h1>MedVision BioMedicals</h1>
            <p>Empowering Healthcare Excellence with Premier Medical Solutions.</p>
            <Button variant="outline">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselhome;
