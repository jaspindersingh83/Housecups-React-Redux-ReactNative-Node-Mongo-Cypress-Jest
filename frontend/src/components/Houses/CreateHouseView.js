import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CreateHouse from './components/CreateHouse/CreateHouse';
import DashboardNotification from '../DashboardNotification/DashboardNotification';
import './CreateHouseView.css';

class CreateHouseView extends Component {

  constructor(props) {
    super(props);
    const locationState = this.props.history.location.state;
    const message = (locationState) ? locationState.message : null;
    this.state = {
      message,
    };
  }

  render() {
    return (
      <div className="CreateHouseView">
        {
          (this.state.message !== null)
            ? <DashboardNotification type="info">{ this.state.message }</DashboardNotification>
            : null
        }
        <CreateHouse />
      </div>
    );
  }
}

export default withRouter(CreateHouseView);
