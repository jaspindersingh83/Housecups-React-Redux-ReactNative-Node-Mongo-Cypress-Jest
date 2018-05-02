import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  
  render() {
    const { pathname } = this.props.history.location;    
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
                  <li data-selected={ pathname === '/' }>Home</li>
                </NavLink>
                <NavLink to="/pricing">
                  <li data-selected={ pathname === '/pricing' }>Pricing</li>
                </NavLink>
              </div>
              <div className="Header__nav__buttons">
                {
                  (pathname !== '/signin') ? (
                    <NavLink to="/signin">
                      <button>Log In</button>
                    </NavLink>
                  ) : null
                }
                {
                  (pathname !== '/signup') ? (
                    <NavLink to="/signup">
                      <button>Sign Up</button>
                    </NavLink>
                  ) : null
                }
              </div>
            </ul>
          </nav>

        </div>
      </div>
    );
  }

}

export default withRouter(Header);
