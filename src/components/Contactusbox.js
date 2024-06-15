import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contactusbox() {
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
    <div>
       <style>
        {`
        
        
    
        /* Header Styles */
        .contactus-header {
            min-height: 500px;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #fff;
        }

        .contactus-header h2 {
            font-size: 4rem;
            text-decoration: underline;
        }

        /* Contact Form Styles */
        .contactus {
            border: 2px solid #fff;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            background-color:#afdde5;
            padding: 20px;
            
        }

        .contactus .top-text {
            font-size: 2rem;
            text-align: center;
            margin: 10px 0;
            position: relative;
            color: #efe5e5;
            padding-bottom: 20px;
        }

        .contactus .top-text::before {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #101027;
            transition: width 0.5s ease-in-out;
        }

        .contactus .top-text:hover::before {
            width: 100%;
        }

        .contactus-elements {
            display: flex;
            
            flex-wrap: wrap;
            justify-content: space-between;
            
            
        }

        .contactus-elements .left-side {
            flex-basis: 48%;
            
        }

        .contactus-elements .right-side {
            flex-basis: 48%;
            margin-right: 7px;
        }
        

        .contactus-elements input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            color: #0c0c0c;
            border: 1px solid #1b3e85;
            border-radius: 5px;
            font-size: 1rem;
        }

         .textarena{
            width: 100%;
            height: 80%;
            border-radius: 5px;
            padding: 10px;
            margin-left: 5px;
            border: 1px solid #1b3e85;
        }
        
        

        .contactus .contact-submit-button {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            
        }

        .contactus .contact-submit-button button {
            padding: 10px 10px;
            margin-left: 10px;
            width: 200px;
            height: 50px;
            background-color: #101027;
            background-origin: padding-box;
            border: 2px rgb(204, 204, 204) solid;
            color: #fff;
            font-size:1rem;
            border-radius: 5px;
            cursor: pointer;
        }
        .contactus .contact-submit-button button:hover{
            background-color: rgb(105, 32, 5);
        }

        .text{
            margin: 10px 60px;
            padding-bottom: 50px;
            text-align: center;
            font-size: 3rem;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
            color:rgb(137, 40, 5);
            
           
        }
          .sometext{
         
          }

        


        @media (max-width: 768px) {
            .contactus-header h2 {
                font-size: 2.5rem;
            }

            .contactus-elements .left-side,
            .contactus-elements .right-side {
                flex-basis: 100%;
            }

            .cmap{
            display: flex;
            
            justify-content: center;
            flex-direction: column;
            padding-bottom: 50px;
            
        }
        .cmap p{
            width: 100%;
            text-align: center;
        }

        .cmap iframe{
            width: 100%;
        }
        }
    
        `}
       </style>
        <div className="contactus">
        <div className="top-text">
          <span style={{ color: '#124e66', fontWeight: 'bold' }}>GET IN</span>
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
            <textarea rows="5" cols="70" className="textarena" name="msg" placeholder="Your Query"></textarea>
            {/* <div className='sometext'>We're here to help,Contact Us!!</div> */}
            
          </div>
          <div className="contact-submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Contactusbox
