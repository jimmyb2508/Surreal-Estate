import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { slide as Menu } from "react-burger-menu";

import '../styles/SideBar.css';

function SideBar() {
  const [query, setQuery] = useState("");
  const { search } = useLocation();

  const history = useHistory();

  const handleSearch = event => {
    event.preventDefault();
    const newQueryString = BuildQueryString('query', { title: { $regex: query } });
    history.push(newQueryString);
  };

  const BuildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  return (
    <Menu right>
    <div className="nav-bar-titles">
      <Link className="nav-item-title" to="/">
        View Properties
      </Link>
      <Link className="nav-item-title" to="saved-properties">
        Saved Properties
      </Link>
      <Link className="nav-item-title" to="btn-box">
        Add a Property
      </Link>
    </div>
    <div className="form-wrapper">
        <form onSubmit={handleSearch}>
          <input
            className="input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-butt" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="filter">
        <h2 className="filter">Filter by city</h2>
        <Link className="links" to={BuildQueryString('query', { city: 'Manchester'})}>
          Manchester
        </Link>
        <Link className="links" to={BuildQueryString('query', { city: 'Leeds'})}>
          Leeds
        </Link>
        <Link className="links" to={BuildQueryString('query', { city: 'Sheffield'})}>
          Sheffield
        </Link>
        <Link className="links" to={BuildQueryString('query', { city: 'Liverpool'})}>
          Liverpool
        </Link>
      </div>
      <h2 className="filter">Filter by price</h2>
      <Link className="links" to={BuildQueryString('sort', { price: 1 })}>
        Ascending
      </Link>
      <Link className="links" to={BuildQueryString('sort', { price: -1 })}>
        Descending
      </Link>
    </Menu>
  );
}

export default SideBar;
