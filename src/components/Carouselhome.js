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
          left: 20%;
          bottom: 30%;
          width: 35%;
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
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="outline-secondary">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homepage_top.jpg"
            alt="HTML"
          />
          <Carousel.Caption className="caption-animation">
            <h1>Second slide</h1>
            <p>Lorem ipsum dolor sit amet, consectetur amet inis adipiscing elit.</p>
            <Button variant="outline-secondary">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homepage_top.jpg"
            alt="Angular"
          />
          <Carousel.Caption className="caption-animation">
            <h1>Third slide </h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button variant="outline-secondary">Secondary</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselhome;
