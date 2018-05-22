import React, { Component } from 'react';
import ListSchools from './components/ListSchools/ListSchools';
import Gateway from '../Gateway/Gateway';

class ListSchoolsView extends Component {

  render() {
    const gatewayProps = {
      allow: [
        'superAdmin',
      ],
      redirect: {
        teacher: '/scoreboard',
        schoolAdmin: '/dashboard',
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="ListTeachersView">
          <ListSchools />
        </div>
      </Gateway>
    );
  }

}

export default ListSchoolsView;
