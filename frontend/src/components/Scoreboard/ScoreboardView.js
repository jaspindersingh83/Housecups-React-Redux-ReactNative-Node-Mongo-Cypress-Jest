import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Gateway from '../Gateway/Gateway';

class ScoreboardView extends Component {

  render() {
    const gatewayProps = {
      allow: [
        'teacher',
      ],
      redirect: {
        schoolAdmin: '/dashboard',
        superAdmin: '/schools/list',
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="ScoreboardView">
          <Scoreboard />
        </div>
      </Gateway>
    );
  }

}

export default ScoreboardView;
