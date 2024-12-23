import React from 'react';

const Founder = () => {
    return (
        <div className="founder-container">
            {/* <div className="founder-circle">
                <h2>OUR FOUNDER</h2>
            </div> */}
            <div className="founder-content-container">
                <div className="founder-imgcon">
                    <img 
                        src="https://www.shutterstock.com/image-photo/happy-mid-aged-older-business-600nw-2322385015.jpg" 
                        alt="Founder" 
                        className="founder-image" 
                    />
                    <h3>FOUNDER: RAJESH DARADE</h3>
                </div>
                <div className="founder-content">
                    <div className="founder-circle">
                        <h2>OUR FOUNDER</h2>
                    </div>
                    <p>
                        LAUNCHING THE COMPANY FROM THE GROUND UP WITH A FOCUS ON HEALTHCARE DEDICATION. 
                        TODAY, MEDVISION IS RECOGNIZED FOR PROVIDING MEDICAL EQUIPMENT TO NUMEROUS HOSPITALS. 
                        THE FOUNDER ACTIVELY OVERSEES QUALITY SERVICE AND ENCOURAGES INNOVATION WITHIN THE TEAM.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .founder-container {
                    background-color: rgb(149, 230, 227); /* Background color */
                    border-radius: 15px; /* Rounded corners */
                    padding: 20px;
                    width: 100%; /* Full width */
                    display: flex;
                    
                    align-items: center; 
                }

                .founder-circle {
                    background-color: #0056b3; /* Darker shade for the circle */
                    border-radius: 50%;
                    padding: 30px 70px;
                    margin: 30px;
                    width: max-content;
                    font-size: 1rem;
                    color: white;
                    text-align: center; 
                }

                .founder-circle h2 {
                    font-size: 20px;
                    margin: 0; /* Remove default margin */
                }

                .founder-content-container {
                    display: flex;
                    align-items: flex-start; /* Align items to the top */
                    width: 100%; 
                    flex-direction:row;
                   
                }

                .founder-imgcon {
                    display: flex;
                    width: 50%; /* Take half the width */
                    flex-direction: column; 
                    align-items: center; 
                    margin: 20px;
                }

                .founder-image {
                    width: 100%; 
                    height: 400px; /* Maintain aspect ratio */
                    max-height: 400px; 
                    border-radius: 50%; 
                    margin-bottom: 10px; 
                }

                .founder-content {
                    width: 60%; /* Take half the width */
                    text-align: left; /* Align text to the left */
                    color: white; /* Text color for better readability */
                }

                .founder-imgcon h3 {
                    font-size: 24px;
                    margin: 10px 0; 
                    text-align: center; /* Center align heading */
                }

                .founder-content p {
                    font-size: 20px; /* Adjust font size for better readability */
                    line-height: 1.5;
                    text-align: justify; /* Justify text */
                }

                /* Responsive adjustments */
                @media (max-width: 900px) { /* Tablets */
                    .founder-content-container {
                        flex-direction: column; /* Stack image and text */
                        align-items: center; /* Center align */
                    }

                    .founder-imgcon, .founder-content {
                        width: 80%; /* Use more width on smaller screens */
                    }

                    .founder-circle {
                    display:none;}
                }

                @media (max-width: 600px) { /* Mobile devices */
                    .founder-imgcon {
                        width: 100%; /* Full width on mobile */
                        margin: 10px 0; /* Reduce margin */
                    }

                
                    .founder-circle {
                    display:none;}
                    .founder-content {
                        width: 100%; /* Full width on mobile */
                        text-align: center; /* Center text on mobile */
                    }

                    .founder-content p {
                        font-size: 16px; /* Smaller font size for mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default Founder;
