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
      redirect: {
        teacher: '/scoreboard',
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
