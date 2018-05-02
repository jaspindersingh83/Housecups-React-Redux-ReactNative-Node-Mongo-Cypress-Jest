import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  state = {}

  render() {
    return (
      <div className="Header">
        <div className="wrapper">

          <div className="Header__logo">
            <div className="Header__logo__image">
              <div className="img" />
            </div>
            <div className="Header__logo__text">
              House Cup
            </div>
          </div>
          <nav className="Header__nav">
            <ul>
              <div className="Header__nav__links">
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/">
                  <li>Pricing</li>
                </NavLink>
              </div>
              <div className="Header__nav__buttons">
                <NavLink to="/signin">
                  <button>Log In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </div>
            </ul>
          </nav>

        </div>
      </div>
    );
  }

}

export default Header;
