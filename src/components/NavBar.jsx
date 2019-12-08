import React from 'react';
import logo from '../logo.png';

import '../styles/NavBar.css';

class NavBar extends React.Component { 
  render() {
    return (
      <div className="NavBar">
        <img className='logo' src={logo} alt="Logo" />
        <ul className="nav">
          <li className="item">View Properties</li>
          <li className="item">Add a Property</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
