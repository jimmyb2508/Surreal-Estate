import React from 'react';

// eslint-disable-next-line react/prop-types
const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

export default Alert;
