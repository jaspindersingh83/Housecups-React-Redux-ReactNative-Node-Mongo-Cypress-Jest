/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
import { adminAuth } from '../../actions';

class Schooladmin extends Component {
  // async componentWillMount() {
  //   await this.props.adminAuth(this.props.history);
  // }
  render() {
    return (
      <div className="Schools">
        <Houses />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { adminAuth })(Schooladmin);
