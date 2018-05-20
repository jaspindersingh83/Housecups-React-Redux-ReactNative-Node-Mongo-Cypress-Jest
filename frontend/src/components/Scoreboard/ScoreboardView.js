import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Gateway from '../Gateway/Gateway';

class ScoreboardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const gatewayProps = {
      allow: [
        'teacher',
      ],
      redirect: '/search-schools',
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
