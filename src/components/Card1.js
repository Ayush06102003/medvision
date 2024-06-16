import React from 'react';

function Card1({ title, description }) {
  return (
    <div>
      <style>
        {`
        
          .card1-title {
            color: #262626;
            font-size: 1.4em;
            line-height: normal;
            font-weight: 700;
            margin-bottom: 1em;
          }

          .small-desc {
            font-size: 1em;
            font-weight: 400;
            line-height: 2em;
            text-align: justify;
            color: #452c2c;
          }

          .go-corner {
            
            position: absolute;
            width: 2em;
            height: 2em;
            overflow: hidden;
            top: 0;
            right: 0;
            background: linear-gradient(135deg, # #e6f9ff
, #e6ffff);
            border-radius: 0 4px 0 32px;
          }

          .card1 {
            display: block;
            position: relative;
            max-width: 400px;
            max-height: 340px;
            min-height: 300px;
            
            border-radius: 10px;
            padding: 2em 1.7em;
            margin: 7%;
            text-decoration: none;
            z-index: 0;
            overflow: hidden;
            background: linear-gradient(to bottom, #e6f2fa, #FFF);
           
          }

          .card1:before {
            content: '';
            position: absolute;
            z-index: -1;
            top: -16px;
            right: -16px;
            background: linear-gradient(135deg, #66a3ff, #384c6c);
            height: 32px;
            width: 32px;
            border-radius: 32px;
            transform: scale(1);
            transform-origin: 50% 50%;
            transition: transform 0.50s ease-out;
          }

          .card1:hover:before {
            transform: scale(28);
          }

          .card1:hover .small-desc {
            transition: all 0.5s ease-out;
            color: rgba(255, 255, 255, 0.8);
          }

          .card1:hover .card1-title {
            transition: all 0.5s ease-out;
            color: #ffffff;
          }
           @media (max-width: 768px) {
            .card1 {
            display: block;
            position: relative;
            
            
           
           } 

           @media (min-width: 300px) and (max-width: 400px) {
            .card1{
            width:max-content;
            height:300px;}
           }
        `}
      </style>

      <div className="card1">
        <p className="card1-title">{title}</p>
        <p className="small-desc">
          {description}
        </p>
        <div className="go-corner"></div>
      </div>
    </div>
  );
}

export default Card1;
