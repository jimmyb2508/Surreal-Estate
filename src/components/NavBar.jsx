import React from 'react';
import logo from '../logo.png';
import { Link } from "react-router-dom";

import '../styles/NavBar.css';

class NavBar extends React.Component { 
  render() {
    return (
      <div>
        <ul className="nav">
        <img className='logo' src={logo} alt="Logo" />
          <Link className="item" to="/">View Properties</Link>
          <Link className="item" to="add-property">Add a Property</Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
