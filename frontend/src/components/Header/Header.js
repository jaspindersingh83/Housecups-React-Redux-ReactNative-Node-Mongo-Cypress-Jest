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
    const publicAuthRoute = [
      '/signin',
      '/signup',
      '/forgotpassword',
    ];
    const protectedRoutes = [
      '/dashboard',
      '/schools',
      '/houses',
      '/scoreboard',
      '/settings',
    ];

    const { pathname } = this.props.history.location;
    const token = localStorage.getItem('token');

    const isAuthorized = !!token;
    const isProtectedRoute = protectedRoutes.includes(pathname);
    const isPublicAuthRoute = publicAuthRoute.includes(pathname);

    let pageName = pathname.split('/').reverse()[0];
    if (pageName.length > 0) {
      pageName = pageName[0].toUpperCase() + pageName.substring(1);
    }

    return (
      <div
        className="Header"
        data-protected-route={isProtectedRoute}
        data-public-auth-route={isPublicAuthRoute}
      >
        <div className="wrapper">
          <NavLink to="/">
            <div className="Header__logo">
              <div className="Header__logo__image">
                <div className="img" />
              </div>
              <div className="Header__logo__text">
                House Cup
              </div>
            </div>
          </NavLink>
          <nav className="Header__nav">
            <ul>
              {
                (!isProtectedRoute) ? (
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
                  (!isPublicAuthRoute && !isAuthorized) ? (
                    <NavLink to="/signin">
                      <button>Log In</button>
                    </NavLink>
                  ) : null
                }
                {
                  (!isPublicAuthRoute && !isAuthorized) ? (
                    <NavLink to="/signup">
                      <button>Sign Up</button>
                    </NavLink>
                  ) : null
                }
                {
                  (!isPublicAuthRoute && isAuthorized) ? (
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

export default withRouter(connect(mapStateToProps, { signout })(Header));
