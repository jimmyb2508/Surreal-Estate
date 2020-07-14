import React from 'react';
import '../styles/PropertyCard.css';
import { FaBed, FaBath, FaPoundSign } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import logo from '../styles/card_image.png';

const PropertyCard = props => {
  // eslint-disable-next-line react/prop-types
  const { title, type, city, bedrooms, bathrooms, price, email } = props;

  return (
    <div className="card">
      <img className="logo" src={logo} alt="logo" />
      <span className="title">{title}</span>
      <span className="type">{type}</span>
      <span className="city">{city}</span>
      <div className="bed-wrapper">
        <FaBed className="bed-icon" />
        <span className="bedrooms">{bedrooms}</span>
      </div>
      <div className="bath-wrapper">
        <FaBath className="bath-icon" />
        <span className="bathrooms">{bathrooms}</span>
      </div>
      <div className="pound-price">
        <FaPoundSign className="pound" />
        <span className="price">{price}</span>
      </div>
      <GoMail className="mail" />
      <span className="email">{email}</span>
    </div>
  );
};

export default PropertyCard;