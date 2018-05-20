import React, { Component } from 'react';
import CreateSchool from './components/CreateSchool';
import Gateway from '../Gateway/Gateway';

class CreateSchoolView extends Component {

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
        if (props.schoolID) {
          props.history.push('/dashboard');
        }
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="CreateSchoolView">
          <CreateSchool auth={this.state.auth} />
        </div>
      </Gateway>
    );
  }

}

export default CreateSchoolView;
