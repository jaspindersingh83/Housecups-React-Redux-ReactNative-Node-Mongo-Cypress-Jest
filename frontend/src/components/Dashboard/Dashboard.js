import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
// Dashboard - Welcome page
import AccountOverview from '../AccountOverview/AccountOverview';
// School
import CreateSchoolView from '../Schools/CreateSchoolView';
// Teacher
import CreateTeacherView from '../Teachers/CreateTeacherView';
import ListTeachersView from '../Teachers/ListTeachersView';
// House
import CreateHouseView from '../Houses/CreateHouseView';
import ListHousesView from '../Houses/ListHousesView';
// Scoreboard - Teacher's view
import ScoreboardView from '../Scoreboard/ScoreboardView';
// User Settings
import Settings from '../Auth/Settings';
import ListSchoolsView from '../Schools/ListSchoolsView';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <Sidebar>
          <Switch>
            <Route exact path="/dashboard" component={AccountOverview} />
            <Route exact path="/school/create" component={CreateSchoolView} />
            <Route exact path="/schools/list" component={ListSchoolsView} />
            <Route exact path="/houses/create" component={CreateHouseView} />
            <Route exact path="/houses" component={ListHousesView} />
            <Route exact path="/teachers/create" component={CreateTeacherView} />
            <Route exact path="/teachers" component={ListTeachersView} />
            <Route exact path="/scoreboard" component={ScoreboardView} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Sidebar>
      </div>
    );
  }

}

export default withRouter(Dashboard);
