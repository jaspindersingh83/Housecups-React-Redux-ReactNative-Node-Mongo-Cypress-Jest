import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRoles } from '../../actions';
import './AccountOverview.css';
import SchoolInfoOverview from './components/SchoolInfoOverview/SchoolInfoOverview';

class AccountOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: {},
    };
  }

  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      auth: { ...props.auth },
    });
  }

  render() {
    return (
      <div className="Overview">
        <SchoolInfoOverview auth={this.state.auth} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getUserRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountOverview);
