import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../actions';
import './Header.css';

class Header extends Component {

  signout = () => {
    const { history } = this.props;
    this.props.signout(history);
  }

  render() {    
    const authRoutes = [
      '/signin',
      '/signup',
      '/forgotpassword',
    ];
    const dashboardRoutes = [
      '/dashboard',
      '/schools',
      '/houses',
      '/scoreboard',
      '/settings',
    ];

    const isAuthorized = localStorage.getItem('token') !== null;

    const { pathname } = this.props.history.location;

    let pageName = pathname.split('/').reverse()[0];
    if (pageName.length > 0) {
      pageName = pageName[0].toUpperCase() + pageName.substring(1);
    }

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
              {
                (!dashboardRoutes.includes(pathname)) ? (
                  // Main Navigation
                  <div className="Header__nav__links">
                    <NavLink to="/">
                      <li data-selected={pathname === '/'}>Home</li>
                    </NavLink>
                    <NavLink to="/pricing">
                      <li data-selected={pathname === '/pricing'}>Pricing</li>
                    </NavLink>
                  </div>
                ) : (
                  // Breadcrumbs for Dashboard
                  <div className="Header__nav__links">
                    <NavLink to="/dashboard">
                      <li>Dashboard</li>
                    </NavLink>
                    {
                      (pathname !== '/dashboard') ? (
                        <NavLink to={pathname}>
                          <li>{ pageName }</li>
                        </NavLink>
                      ) : null
                    }
                  </div>
                )
              }
              <div className="Header__nav__buttons">
                {
                  (!authRoutes.includes(pathname) && !isAuthorized) ? (
                    <NavLink to="/signin">
                      <button>Log In</button>
                    </NavLink>
                  ) : null
                }
                {
                  (!authRoutes.includes(pathname) && !isAuthorized) ? (
                    <NavLink to="/signup">
                      <button>Sign Up</button>
                    </NavLink>
                  ) : null
                }
                {
                  (!authRoutes.includes(pathname) && isAuthorized) ? (
                    <button className="signout" onClick={this.signout}>Sign Out</button>
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { signout })(withRouter(Header));
