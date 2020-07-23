import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import SideBar from './SideBar';

import '../styles/Properties.css';

function Properties({ userID }) {
  const [properties, setProperties] = useState([]);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      // .then(({ data }) => console.log(data))
      .then(({ data }) => setProperties(data))
      .catch(err => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post('http://localhost:3000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <div className="Properties">
      <SideBar />
      {/* {properties.map(property => console.log(property))} */}
      {properties.map(property => (
        // eslint-disable-next-line react/jsx-key
        <div className="col">
          <PropertyCard
            userID={userID}
            onSaveProperty={handleSaveProperty}
            className="item"
            key={property._id}
            {...property}
          />
        </div>
      ))}
    </div>
  );
}

export default Properties;