import React from 'react';

function ImageCard({ imageUrl }) {
  return (
    <div>
      <style>{`
        .card {
          width: max-content;
          height: 450px;
          background: white;
          border-radius: 10px;
          margin: 5px;
          padding:0
          overflow: hidden; 
        }
        .card img {
          width: 100%; 
          height: 100%; 
          display: block; 
          object-fit: cover; 
          transition: transform 0.3s;
        }
        .card img:hover {
          transform: scale(1.05); 
        }
        
        @media (max-width: 768px) {
        
          .card img {
          width: 400px; 
          height: 100%; 
          display: block; 
          object-fit: cover; 
          transition: transform 0.3s;
        }
      }
          
      `}</style>
      <div className="card shadow">
        <img src={imageUrl} alt='im' />
      </div>
    </div>
  );
}

export default ImageCard;
