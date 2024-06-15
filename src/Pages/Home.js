import React from 'react';

import './Home.css'; // Import the CSS file
import Card1 from '../components/Card1';
import Carousel from '../components/carousel';
import ImageCard from '../components/Image-card';
import BoxInfo from '../components/Boxinfo';
import Contactusbox from '../components/Contactusbox';
import * as textContent from '../data/textcontent.json'
import Carouselhome from '../components/Carouselhome';
import Logocarousel from '../components/Logocarousel';


function Home() {
  // const { t1, d1 } = textContent.productCard;
  // const { t2, d2 } = textContent.productCard;
  // const { t3, d3 } = textContent.productCard;

  const { features, aboutUs } = textContent;
  return (
    <>
    <div className="home-container">
     

      <Carouselhome></Carouselhome>
    
      <div className='homemid'>
      <h1 className="home-heading">SALES. SERVICE. APPLICATION.</h1>
      <h2 className="home-subheading">DIAGNOSTIC SERVICES</h2>

      <p className="home-paragraph">
        Biomedicals ( MedVison Biomedicals Pvt. Ltd. ) is founded on July 2011 with vision of providing,
        well-rounded portfolio of clinical diagnostic products,
        after sales support and consultation designed to streamline
        
      </p>
      </div>

      

    </div>
    <img src="/assets/homepage1.png" alt="Home Page" className="home-image" />

    <p className='homepage-quote'>INNOVATION FOR ADVANCED DIAGNOSTICS</p>
    <h2 className='h2'>How Can We Help You ?</h2>

    <div className='card-div'>
      
      {features.map((feature, index) => (
        <Card1 key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
    <Logocarousel></Logocarousel>

    <BoxInfo aboutusinfo={aboutUs} />

    
    

    
    <h2 className='h2'>EXPLORE OUR PRODUCTS</h2>

    <Carousel></Carousel>


   <Contactusbox></Contactusbox>
    

    </>
  );
}

export default Home;
