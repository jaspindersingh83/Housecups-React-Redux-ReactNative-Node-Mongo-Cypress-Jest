import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import AccountOverview from '../AccountOverview/AccountOverview';
import Schools from '../Schools/Schools';
import Settings from '../Auth/Settings';
import Sidebar from '../Sidebar/Sidebar';

class Dashboard extends Component {

  render() {
    console.log(this.props.match.params);
    return (
      <div className="Dashboard">
     
        <Sidebar>
          <Switch>
            <Route exact path="/dashboard" component={AccountOverview} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Sidebar>

      </div>
    );
  }

}

export default withRouter(Dashboard);
