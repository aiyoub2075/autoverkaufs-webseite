import React from 'react';
import './CarListing.css';

const CarListing = ({ name, image , Preis}) => {
  return (
    <div className="car-listing">
      <img src={image} alt={name} className="car-image" />
      <h2 className="car-name">{name}</h2>
      
    </div>
  );
};

export default CarListing;
