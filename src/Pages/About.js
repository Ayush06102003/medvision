import React from 'react'

import '../styles/about.css';
import Carousel from '../components/carousel';
import Logocarousel from '../components/Logocarousel';
import Contactform from '../components/Contactform';
import Founder from '../components/Founder';

function About() {
    return (
        <>
           
            
            <div className="top">
                <img src="assets/Hero_banner.png" alt="img" />
                <div className="text">
                    <h4 className='top-text-h1' >Medvision Biomedicals Pvt.Ltd</h4>
                    <div className="text-in">
                        <h1 className="text-in-h1">The Most Relaible Diagnostic Servives across India</h1>
                        <p className="text-in-p">Vision Biomedicals <span>( Medvision BioMedicals Pvt.Ltd. )</span> is founded int the year 2011 with vision of providing,well-rounded portfolio of clinical diagnostic products,after sales support and consultation designed to Streamline Diagnostic Centres work and improve patient treatment. </p>
                    </div>

                </div>
            </div>
            <div className="tag">
                <h1>Our Buisness Partners</h1>
            </div>
            
                <Logocarousel/>


            

            <div className="choose-us">
                <div className="heading"><h1>Why Choose us?</h1></div>
            <div className="card-row">
                
                

                <div className="card">
                    <div className="image">
                    <img src="assets/choose3.png" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Quality of Products 
                            </span>
                        </a>

                        <p >
                        Our commitment to excellence ensures that every product we offer meets the highest standards of quality and safety, giving you peace of mind.
                        </p>

                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="assets/choose4.png" alt="" />

                    </div>
                    <div className="content">
                    
                        <a href="#">
                            <span className="title">
                                Authorized Channel Partner 
                            </span>
                        </a>

                        <p>
                        We are proud to be an authorized partner of leading medical equipment manufacturers, guaranteeing authenticity and reliability in all our offerings. 
                        </p>

                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="assets/choose1.png" alt="" />

                    </div>
                    <div className="content">
                    
                        <a href="#">
                            <span className="title">
                            Advanced Service Center 
                            </span>
                        </a>

                        <p>
                        Our cutting-edge service center is equipped to provide exceptional maintenance and support, ensuring your equipment operates at peak performance. 
                        </p>

                    </div>
                </div>
                </div>
            </div>

            

            <div className="service">
                <div className="service-tag">
                   <h1>Company overview</h1>
                   <p>The region’s only multi-disciplinary congress on laboratory medicine providing multidisciplinary education for medical lab professionals.</p>
                </div>
                <Carousel/>
                <Founder></Founder>
            </div>

            

            <div className="cust-tag">
                <p className="cust-tag-p">OUR CLIENTS</p>
                <h3 className="cust-tag-h3">Our Cient Happy Say About Us</h3>
            </div>

            <div className="reviews">
                <div className="review-cards">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit temporibus suscipit porro officia omnis non eum mollitia iure illo dolores ipsa facere nemo perferendis maiores optio tempora exercitationem accusantium.</p>
                    <div className="person-info">
                            <img src="assets/dr.png" alt="" />
                        <div className="dr">
                            <h4>Dr.John Berg</h4>
                            <span>CANCER RESEARCH</span>
                        </div>

                    </div>
                </div>
                <div className="review-cards">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit temporibus suscipit porro officia omnis non eum mollitia iure illo dolores ipsa facere nemo perferendis maiores optio tempora exercitationem accusantium.</p>
                    <div className="person-info">
                            <img src="assets/dr.png" alt="" />
                        <div className="dr">
                            <h4>Dr.John Berg</h4>
                            <span>CANCER RESEARCH</span>
                        </div>

                    </div>
                </div>
                <div className="review-cards">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit temporibus suscipit porro officia omnis non eum mollitia iure illo dolores ipsa facere nemo perferendis maiores optio tempora exercitationem accusantium.</p>
                    <div className="person-info">
                            <img src="assets/dr.png" alt="" />
                        <div className="dr">
                            <h4>Dr.John Berg</h4>
                            <span>CANCER RESEARCH</span>
                        </div>

                    </div>
                </div>
            
            </div>
            
            
            


        </>
    )
}

export default About
