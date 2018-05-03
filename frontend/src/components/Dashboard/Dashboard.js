import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import AccountOverview from '../AccountOverview/AccountOverview';
import Houses from '../Houses/Houses';
import Scoreboard from '../Scoreboard/Scoreboard';
import Settings from '../Auth/Settings';
import Schools from '../Schools/Schools';

class Dashboard extends Component {

  render() {
    console.log(this.props.match.params);
    return (
      <div className="Dashboard">
     
        <Sidebar>
          <Switch>
            <Route exact path="/dashboard" component={AccountOverview} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/houses" component={Houses} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Sidebar>

      </div>
    );
  }

}

export default withRouter(Dashboard);
