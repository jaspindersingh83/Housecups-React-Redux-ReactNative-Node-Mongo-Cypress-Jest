import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
import { adminAuth } from '../../actions';
import './Schooladmin.css';

class Schooladmin extends Component {
  // async componentWillMount() {
  //   await this.props.adminAuth(this.props.history);
  // }
  render() {
    return (
      <div>
        <Houses />
        {/* <Teachers /> */}
      </div>
    );
  }
}
// const mapStateToProps = () => {
//   return {};
// };


const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { adminAuth })(Schooladmin);
