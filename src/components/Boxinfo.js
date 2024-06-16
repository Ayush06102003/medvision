import React from "react";

function BoxInfo({ imageUrl,aboutusinfo }) {
  return (
    <div className="box">
      <style>{`
        .box {
        background-color:#afdde5;
          display: flex;
          align-items: center;
          width: max-content
          height:500px
          padding: 10px;
          margin:20px;
          
          
        }
        .image-container {
          flex: 2;
          padding-right: 10px;
          
        }
        .image-container img {
          height:530px;
          width:550px
          border-radius: 8px;
          margin-left:30px;
          border-radius:10px;
          
        }
        .text-container {
          flex: 4;
          padding:4%;
        }

        .points {
          list-style: none;
          padding: 0;
      }

.points li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    font-family: Times new roman;
    font-weight:600;
}

.points li i {
    margin-right: 0.5em; /* Space between icon and text */
    
}
        .about-t{
          
        font-size:30px;
        text-align: left;
        margin:0;
        font-family:Times New Roman;

        }
        .bold-text {
          font-weight: bolder;
          font-size: 3rem;
          text-align:Left;
          margin-bottom:1%;
          font-family: Times New Roman;
        }
        .semi-bold-text {
          
          font-size: 1.2rem ;
          text-align:Left;
           line-height: 2.2rem;
          font-family:  Times New Roman;
        }

        @media (max-width: 768px) {
        .box{
        display:flex;
        flex-direction:column;
        }
        .image-container img {
         height:300px;
          margin:0;
          border-radius: 8px;
        }
        .about-t{
        font-size:1.2rem;
        font-family:Times New Roman;

        }

        .bold-text {
          font-weight: bold;
          font-size: 2.5rem;
          margin-bottom:20px
          text-align:center;
          font-family: Fantasy;
        }
        .semi-bold-text {
          font-size: 1rem ;
          text-align:left;
          font-family:  Times New Roman;
        }

        @media (min-width: 300px) and (max-width: 400px) {
        .box{
        display:flex;
        flex-direction:column;
        }

        .image-container img {
          height:300px;
          
          border-radius: 8px;
        }
        .about-t{
        font-size:1.2rem;
        font-family:Times New Roman;

        }

        .bold-text {
          font-weight: bold;
          font-size: 2.5rem;
          margin-bottom:20px
          text-align:center;
          font-family: Fantasy;
        }
        .semi-bold-text {
          font-size: 1rem ;
          text-align:left;
          font-family:  Times New Roman;
        }
        }
        }
      `}</style>
      <div className="image-container">
        <img src="/assets/choose3.png" alt="Example" />
      </div>

      <div className="text-container">
        <p className="about-t"> Medvision Biomedicals</p>

        <p style={{ marginTop: "8px" }} className="bold-text">
          First Line Bold First Bold
        </p>
        <p className="semi-bold-text">
          {aboutusinfo}
        </p>
        <ul className="points">
          <li>
            <i className="fas fa-shipping-fast"></i> Reduced shipping times and
            costs.
          </li>
          <li>
            <i className="fas fa-box"></i> Easier inventory management.
          </li>
          <li>
            <i className="fas fa-stream"></i> Streamlined supply chain.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BoxInfo;
