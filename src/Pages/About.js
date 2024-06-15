import React from 'react'

import '../styles/about.css';
import Carousel from '../components/carousel';
import Logocarousel from '../components/Logocarousel';
import Contactform from '../components/Contactform';

function About() {
    return (
        <>
           
            
            <div className="top">
                <img src="assets/Hero_banner.png" alt="img" />
                <div className="text">
                    <h4 className='top-text-h1' >Medvision Biomedicals</h4>
                    <div className="text-in">
                        <h1 className="text-in-h1">Your gateway to medical laboratory growth in the ASIAN region</h1>
                        <p className="text-in-p">Showcasing next-gen technology where thousands of industry professionals come to build valuable relationships and access groundbreaking knowledge.</p>
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
                                Lorem ipsum dolor sit 
                            </span>
                        </a>

                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                                Lorem ipsum dolor sit 
                            </span>
                        </a>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
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
                                Lorem ipsum dolor sit 
                            </span>
                        </a>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
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
            </div>

            <div className="sales">
                <div className="desc">
                    <h1>100k</h1>
                    <p>SAVE HEARTS</p>
                </div>
                <div className="desc">
                    <h1>125k</h1>
                    <p>EXPERT DOCTORS</p>
                </div>
                <div className="desc">
                    <h1>250k</h1>
                    <p>SAVED TOOTH</p>
                </div>
                <div className="desc">
                    <h1>554k</h1>
                    <p>HAPPY CUTOMERS</p>
                </div>
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
            
            {/* <Contactform/> */}
            


        </>
    )
}

export default About
