import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRoles, getTeachers } from '../../actions';
import CreateTeacher from './components/CreateTeacher/CreateTeacher';
import Teacher from './components/Teacher/Teacher';
import ListTeachers from './components/ListTeachers/ListTeachers';

class Teachers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: {},
      teachers: []
    };
  }

  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
    await this.props.getTeachers(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      auth: { ...props.auth },
      teachers: [...props.teachers],
    });
  }

  render() {
    return (
      <div className="Teachers">
        <CreateTeacher />
        <ListTeachers teachers={this.state.teachers} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getUserRoles, getTeachers })(Teachers);
