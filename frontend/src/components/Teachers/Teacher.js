import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import { deleteTeacher } from '../../actions';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.hasSignedUp,
    };
  }
  deleteTeacher = async (id) => {
    await this.props.deleteTeacher(id, this.props.history);
  }

  render() {
    return (
      <div className="tableitem" >
        <div className="tableitem__name">
          {this.state.firstName}
        </div>
        <div className="tableitem__name">
          {this.state.lastName}
        </div>
        <div className="tableitem__name">
          {this.state.email}
        </div>
        <div className="tableitem__mascot">
          {this.state.hasSignedUp}
        </div>
        <Glyphicon
          glyph="trash"
          onClick={() => this.deleteHouse(this.state.id)}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, { deleteTeacher})(Teacher));

