import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  
  render() {
    const year = new Date().getFullYear();
    return (
      <div className="Footer">
        <div className="wrapper">
          <div className="Footer__note">&copy; { year } - House Cup</div>
          <div className="Footer__links">
            <ul>
              <a href="https://github.com/Lambda-School-Labs/house_cup" target="_blank">
                <li>Contribute</li>
              </a>
              <NavLink to="/terms">
                <li>Terms</li>
              </NavLink>
              <NavLink to="/attribution">
                <li>Attribution</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
