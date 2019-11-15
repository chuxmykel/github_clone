import React from 'react';
import logo from '../../img/github.png';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="header-gp-1">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="search flex">
          <input type="text" placeholder="Search or jump to..."></input>
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
