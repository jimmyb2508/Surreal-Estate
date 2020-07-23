import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import logo from '../logo.png';

import '../styles/NavBar.css';

// eslint-disable-next-line react/prop-types
const NavBar = ({ onLogin, name, onLogout, userID, picture }) => {
  let loginButton;
  if (!userID) {
    loginButton = (
      <FacebookLogin appId="2621730428075425" fields="name,email,picture" callback={onLogin} />
    );
  } else {
    loginButton = (
      <button className="fb-logout-btn" type="button" onClick={onLogout}>
        <img src={picture} alt="Profile" className="fb-profile-pic" />
        Logged in as {name}
        <br />
        Click to logout
      </button>
    )
  }
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav">
        <Link className="nav-item" to="/">
          View Properties
        </Link>
        <Link className="nav-item" to="saved-properties">
          Saved Properties
        </Link>
        <Link className="nav-item" to="add-property">
          Add a Property
        </Link>
        <span>{loginButton}</span>
      </ul>
    </div>
  );
};

export default NavBar;