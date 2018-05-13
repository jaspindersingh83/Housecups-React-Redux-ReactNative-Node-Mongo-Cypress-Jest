/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
import Teachers from '../Teachers/Teachers';
import { getUserRoles, authError } from '../../actions';

class Schooladmin extends Component {
  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
    if (!this.props.auth.isSchoolAdmin){
      this.props.history.push('/signin');
      await this.props.authError('You are not authorized, Please sign in as school admin');
    }
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

export default connect(mapStateToProps, { getUserRoles, authError })(Schooladmin);
