import React from 'react';

const PropertyCard = props => {
  const {
    title,
    type,
    city,
    bedrooms,
    bathrooms,
    price,
    email,
  } = props;

    return (
      <div className="propertyCard">
        <span className="title">{title}</span>
        <span className="type">{type}</span>
        <span className="bedrooms">{bedrooms}</span>
        <span className="bathrooms">{bathrooms}</span>
        <span className="price">{price}</span>
        <span className="city">{city}</span>
        <span className="email">{email}</span>
      </div>
    );
}

export default PropertyCard;