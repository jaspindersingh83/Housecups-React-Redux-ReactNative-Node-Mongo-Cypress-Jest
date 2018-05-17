import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    const { pathname } = this.props.history.location;
    return (
      <div className="Sidebar">
        <div className="Sidebar__sidebar">

          <nav className="Sidebar__navigation">
            <ul>
              <Link to="/dashboard">
                <li data-selected={ new RegExp(/^\/dashboard/gi).test(pathname) }>Summary</li>
              </Link>
              <Link to="/schools">
                <li data-selected={ pathname === '/schools' }>Create School</li>
              </Link>
              <Link to="/houses">
                <li data-selected={ new RegExp(/^\/houses/gi).test(pathname) }>Manage Houses</li>
              </Link>
              <Link to="/teachers">
                <li data-selected={ new RegExp(/^\/teachers/gi).test(pathname) }>Manage Teachers</li>
              </Link>
              <Link to="/scoreboard">
                <li data-selected={ pathname === '/scoreboard' }>Score Board</li>
              </Link>
              <Link to="/settings">
                <li data-selected={ pathname === '/settings' }>User Settings</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="Sidebar__content">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default withRouter(Sidebar);
