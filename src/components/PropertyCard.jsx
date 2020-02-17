import React from 'react';
import '../styles/PropertyCard.css';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { FaPoundSign } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const PropertyCard = props => {
  const { title, type, city, bedrooms, bathrooms, price, email } = props;

  //temp - hardcoded to allow for styling

  return (
    <div className="card">
      <span className="title">18th Century Rural Home</span>
      <br />
      <br />
      <span className="type">Terraced House</span>
      <br />
      <br />
      <span className="city">Manchester</span>
      <br />
      <br />
      <FaBed className="bed" />
      <span className="bedrooms">2</span>
      <br />
      <br />
      <FaBath className="bath" />
      <span className="bathrooms">2</span>
      <br />
      <br />
      <FaPoundSign className="pound" />
      <span className="price">180,000</span>
      <br />
      <br />
      <GoMail className="mail" />
      <span className="email">jamesb@gmail.com</span>
    </div>
  );
};

export default PropertyCard;