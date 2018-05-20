import React, { Component } from 'react';
import './AccountOverview.css';
import SchoolInfoOverview from './components/SchoolInfoOverview/SchoolInfoOverview';
import Gateway from '../Gateway/Gateway';

class AccountOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const gatewayProps = {
      allow: [
        'schoolAdmin',
      ],
      execute: (props) => {
        if (props.roles.length === 0 && props.schoolID === '') {
          props.history.push('/school/create');
        }
        if (props.isTeacher) {
          props.history.push('/scoreboard');
        }
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="Overview">
          <SchoolInfoOverview />
        </div>
      </Gateway>
    );
  }

}

export default AccountOverview;
