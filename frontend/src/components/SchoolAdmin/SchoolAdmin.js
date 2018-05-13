/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
import Teachers from '../Teachers/Teachers';
import { schoolAdminAuth } from '../../actions';

class Schooladmin extends Component {
  async componentWillMount() {
    await this.props.schoolAdminAuth(this.props.history);
  }
  render() {
    return (
      <div className="Schools">
        <Houses />
        <Teachers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { schoolAdminAuth })(Schooladmin);
