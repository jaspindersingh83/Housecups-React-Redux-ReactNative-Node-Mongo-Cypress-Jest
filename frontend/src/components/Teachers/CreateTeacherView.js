import React, { Component } from 'react';
import CreateTeacher from './components/CreateTeacher/CreateTeacher';
import DashboardNotification from '../DashboardNotification/DashboardNotification';
import './CreateTeacherView.css';

class CreateTeacherView extends Component {

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
      <div className="CreateTeacherView">
        {
          (this.state.message !== null)
            ? <DashboardNotification type="info">{ this.state.message }</DashboardNotification>
            : null
        }
        <CreateTeacher />
      </div>
    );
  }

}

export default CreateTeacherView;
