import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
     
        <Sidebar>
          <br /><br />
          Dashboard Content goes here<br />
          ...
        </Sidebar>

      </div>
    );
  }

}

export default Dashboard;
