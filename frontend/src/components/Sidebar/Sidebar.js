import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar__sidebar">

          <nav className="Sidebar__navigation">
            <ul>
              <Link to="/dashboard/houses">
                <li data-selected="true">Overview</li>
              </Link>
              <Link to="/dashboard/houses">
                <li>Houses</li>
              </Link>
              <Link to="/dashboard/scores">
                <li>Scoreboard</li>
              </Link>
              <Link to="/dashboard/settings">
                <li>Settings</li>
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

export default Sidebar;
