import React, {useEffect} from 'react'
import '../styles/logocarousel.css'
function Logocarousel() {
    useEffect(() => {
        const logosSlide = document.querySelector('.logos-slide');
        const copy = logosSlide.cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
      }, []);
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
            <img src="assets/logo1.png" alt="" />
            <img src="assets/logo2.png" alt="" />
            <img src="assets/logo3.png" alt="" />
            <img src="assets/logo4.png" alt="" />
        </div>
      </div>
      {/* <div className="logos">
        <div className="logos-slide">
            <img src="assets/logo1.png" alt="" />
            <img src="assets/logo2.png" alt="" />
            <img src="assets/logo3.png" alt="" />
            <img src="assets/logo4.png" alt="" />
        </div>
      </div> */}
      
    </>
  )
}

export default Logocarousel
