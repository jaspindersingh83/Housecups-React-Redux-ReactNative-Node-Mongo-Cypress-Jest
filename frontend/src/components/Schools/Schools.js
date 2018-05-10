/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
// import { getAllSchools } from '../../actions';

class Schools extends Component {
  // async componentWillMount() {
  //   await this.props.adminAuth(this.props.history);
  // }
  render() {
    return (
      <div className="Schools">
        Something here
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// export default connect(mapStateToProps, { getAllSchools })(Schools);
export default connect(mapStateToProps, { })(Schools);