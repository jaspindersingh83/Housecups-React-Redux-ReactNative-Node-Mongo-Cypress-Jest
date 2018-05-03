import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './DashboardHeader.css';

class DashboardHeader extends Component {
  
  render() {
    const { pathname } = this.props.history.location;

    let pageName = pathname.split('/').reverse()[0];
    pageName = pageName[0].toUpperCase() + pageName.substring(1);

    return (
      <div className="DashboardHeader">
        <div className="wrapper">

          <div className="DashboardHeader__logo">
            <div className="DashboardHeader__logo__image">
              <div className="img" />
            </div>
            <div className="DashboardHeader__logo__text">
              House Cup
            </div>
          </div>
          <nav className="DashboardHeader__nav">
            <ul>
              <div className="DashboardHeader__nav__links">
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
              <div className="DashboardHeader__nav__buttons">
                <NavLink to="/signout">
                  <button className="signout">Sign Out</button>
                </NavLink>
              </div>
            </ul>
          </nav>

        </div>
      </div>
    );
  }

}

export default withRouter(DashboardHeader);
