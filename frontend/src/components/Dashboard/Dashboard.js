import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import AccountOverview from '../AccountOverview/AccountOverview';
import Schools from '../Schools/Schools';
import Scoreboard from '../Scoreboard/Scoreboard';
import Settings from '../Auth/Settings';
import Sidebar from '../Sidebar/Sidebar';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
     
        <Sidebar>
          <Switch>
            <Route exact path="/dashboard" component={AccountOverview} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Sidebar>

      </div>
    );
  }

}

export default withRouter(Dashboard);
