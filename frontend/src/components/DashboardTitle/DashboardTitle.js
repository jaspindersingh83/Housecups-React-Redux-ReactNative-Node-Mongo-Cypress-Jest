import React, { Component } from 'react';
import './DashboardTitle.css';

class DashboardTitle extends Component {

  render() {
    return (
      <div className="DashboardTitle">
        <div className="DashboardTitle__text">{this.props.title}</div>
      </div>
    );
  }

}

export default DashboardTitle;
