import React, { Component } from 'react';
import './AccountOverview.css';
import SchoolInfoOverview from './components/SchoolInfoOverview/SchoolInfoOverview';
import Gateway from '../Gateway/Gateway';

class AccountOverview extends Component {

  render() {
    const gatewayProps = {
      allow: [
        'schoolAdmin',
      ],
      execute: (props) => {
        if (props.isNone && props.schoolID === '') {
          props.history.push('/school/create');
        }
        if (props.isTeacher) {
          props.history.push('/scoreboard');
        }
        if (props.isSuperAdmin) {
          props.history.push('/schools/list');
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
