import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

import '../styles/NavBar.css';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <img className="logo" src={logo} alt="Logo" />
          <Link className="item-one" to="/">
            View Properties
          </Link>
          <Link className="item-two" to="add-property">
            Add a Property
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
