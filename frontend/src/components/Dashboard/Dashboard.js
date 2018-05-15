import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRoles } from '../../actions';
import './Dashboard.css';
import AccountOverview from '../AccountOverview/AccountOverview';
import Scoreboard from '../Scoreboard/Scoreboard';
import Settings from '../Auth/Settings';
import Sidebar from '../Sidebar/Sidebar';
import Houses from '../Houses/Houses';
import CreateSchool from '../SchoolAdmin/CreateSchool';
import Teachers from '../Teachers/Teachers';

class Dashboard extends Component {

  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
  }

  render() {
    return (
      <div className="Dashboard">
        <Sidebar>
          <Switch>
            <Route exact path="/dashboard" component={AccountOverview} />
            <Route exact path="/schools" component={CreateSchool} />
            <Route exact path="/houses" component={Houses} />
            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Sidebar>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};
// export default withRouter(Dashboard);
export default withRouter(connect(mapStateToProps, { getUserRoles })(Dashboard));
