import React from "react";

function BoxInfo({ imageUrl, aboutusinfo }) {
  return (
    <div className="box">
      <style>{`
        .box {
          background-color: #afdde5;
          display: flex;
          align-items: center;
          width: 100%;
          height: max-content;
          padding: 10px;
          margin: 20px auto;
          flex-wrap: wrap;
        }
        .image-container {
          flex: 2;
          padding-right: 10px;
        }
        .image-container img {
          width:600px;
          height: 550px;
          border-radius: 10px;
        }
        .text-container {
          flex: 4;
          padding: 4%;
        }
        .points {
          list-style: none;
          padding: 0;
        }
        .points li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5em;
          font-size: 1.2em;
          font-weight: 600;
        }
        .points li i {
          margin-right: 0.5em;
        }
        .about-t {
          font-size: 30px;
          text-align: left;
          margin: 0;
          font-family: Times New Roman;
        }
        .bold-text {
          font-weight: bolder;
          font-size: 3rem;
          text-align: left;
          margin-bottom: 1%;
          font-family: Times New Roman;
        }
        .semi-bold-text {
          font-size: 1.2rem;
          text-align: left;
          line-height: 2.2rem;
          font-family: Times New Roman;
        }
        @media (max-width: 1100px) {
        .box {
            flex-direction: column;
          }
          .image-container {
            width: 100%;
          }
          .image-container img {
            height: 500px;
            width: 800px;
            margin: 0 auto;
          }
          .semi-bold-text {
          text-align:justify;}
        }
        @media (max-width: 800px) {
          .box {
            flex-direction: column;
          }
          .image-container {
            width: 100%;
          }
          .image-container img {
            height: auto;
            max-width: 100%;
            margin: 0 auto;
          }
          .about-t {
            font-size: 1.2rem;
          }
          .bold-text {
            font-size: 2rem;
            text-align: left;
          }
          .semi-bold-text {
          text-align:justify;
          font-size: 1rem;
          }
           .points li {
          
          margin-bottom: 0.5em;
          font-size: 1em;
          font-weight: 500;
        }
        }
        @media (max-width: 400px) {
          .box {
            flex-direction: column;
          }
          .image-container {
            width: 100%;
          }
          .image-container img {
            height: auto;
            width: 100%;
            max-width: 200px;
            margin-top: 20px;
          }
          .about-t {
            font-size: 1rem;
          }
          .points li {
            font-size: 1rem;
            font-weight: 600;
          }
          .bold-text {
            font-size: 2.5rem;
            text-align: center;
          }
          .semi-bold-text {
            font-size: 1rem;
          }
        }
      `}</style>
      <div className="image-container">
        <img src="/assets/home.jpg" alt="Example" />
      </div>
      <div className="text-container">
        <p className="about-t">Medvision Biomedicals</p>
        <p style={{ marginTop: "8px" }} className="bold-text">
          First Line Bold First Bold
        </p>
        <p className="semi-bold-text">
          {aboutusinfo}
        </p>
        <ul className="points">
          <li>
            <i className="fas fa-shipping-fast"></i> Reduced shipping times and costs.
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






