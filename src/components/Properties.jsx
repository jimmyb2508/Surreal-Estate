import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import SideBar from './SideBar';

import '../styles/Properties.css';

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/`)
      .then(response => console.log(response.data));
  }, [])

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch(err => console.error(err));
  }, [search]);

  return (
    <div className="Properties">
      <SideBar />
      {properties.map(property => (
        // eslint-disable-next-line react/jsx-key
        <div className="col">
          <PropertyCard className="item" key={property._id} {...property} />
        </div>
      ))}
    </div>
  );
}

export default Properties;
