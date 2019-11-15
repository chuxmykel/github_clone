import React, { useState } from 'react';
import logo from '../../img/github.png';
import './Header.css';

const Header = props => {
  const { handleSearch } = props;
  const [name, handleNameChange] = useState('');

  return (
    <header className="Header">
      <div className="header-gp-1">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="search flex">
          <form onSubmit={(e) => handleSearch(e, name)}>
            <input
              type="text"
              name="username"
              placeholder="Search or jump to..."
              value={name}
              onChange={e => handleNameChange(e.target.value)}
            />
          </form>
          <div className="slash-icon">/</div>
        </div>
        <nav>
          <ul>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <i className="fas fa-bell"></i>
        <i className="fas fa-plus"></i>
        <span className="profile-img"></span>
      </div>
    </header>
  );
}

export default Header;
