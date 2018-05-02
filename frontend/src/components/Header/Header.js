import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="wrapper">
      
          <nav className="Header__navigation">
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Features</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="/signin">
                <li>Log In</li>
              </a>
              <a href="/signup">
                <li>Sign Up</li>
              </a>
            </ul>
          </nav>
          
        </div>
      </div>
    );
  }

}

export default Header;
