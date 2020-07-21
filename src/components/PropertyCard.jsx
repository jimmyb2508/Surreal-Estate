import React from 'react';
import '../styles/PropertyCard.css';
import { FaBed, FaBath, FaPoundSign, FaRegStar } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import logo from '../styles/card_image.png';

const PropertyCard = props => {
  const {
    _id,
    title,
    type,
    city,
    bedrooms,
    bathrooms,
    price,
    email,
    onSaveProperty,
    userID,
  } = props;

  let saveButton;
  if (userID) {
    saveButton = (<button className="save-butt" onClick={() => onSaveProperty(_id)}>Save <FaRegStar className="star" /></button>)
  } 

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
      <div className="mail-box">
        <GoMail className="mail" />
        <span className="email">{email}</span>
      </div>
      <div>
        <span className="save">{saveButton}</span>
      </div>
    </div>
  );
};

export default PropertyCard;