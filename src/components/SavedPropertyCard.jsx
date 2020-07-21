import React from 'react';

import '../styles/SavedPropertyCard.css';

const SavedPropertyCard = props => {
  const { _id, propertyListing } = props;

  console.log(_id)
  console.log(propertyListing)


  return (
    <div className="saved-wrapper">
      <div className="saved-card">
        <span className="title">{propertyListing.title}</span>
      </div>
    </div>
  )
};

export default SavedPropertyCard;