import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.css';
import AccountOverview from '../AccountOverview/AccountOverview';
import Schools from '../Schools/Schools';
import Scoreboard from '../Scoreboard/Scoreboard';
import Settings from '../Auth/Settings';
import Sidebar from '../Sidebar/Sidebar';
import { getUserRoles } from '../../actions';

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
            <Route exact path="/schools" component={Schools} />
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
