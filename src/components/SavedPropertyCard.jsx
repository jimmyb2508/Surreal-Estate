import React from 'react';

import '../styles/SavedPropertyCard.css';

const SavedPropertyCard = props => {
  const { _id, propertyListing, deleteProperty } = props;

  console.log(_id)
  console.log(propertyListing)
  console.log(deleteProperty)


  return (
    <div className="saved-wrapper">
      <div className="saved-card">
        <span className="title">{propertyListing.title}</span>
        <button type="button" onClick={() => deleteProperty(_id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  )
};

export default SavedPropertyCard;