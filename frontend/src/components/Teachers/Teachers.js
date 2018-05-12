import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Teacher from './Teacher';
import { addTeacher, deleteTeacher, getTeachers } from '../../actions';

class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      newTeacherFirstName: '',
      newTeacherLastName: '',
      newTeacherEmail: '',
      teacherAdded: false,
    };
  }
  async componentWillMount() {
    await this.props.getTeachers(this.props.history);
  }
  async componentWillReceiveProps(props) {
    await this.setState({
      teachers: props.teachers,
    });
  }
  handleInput = async (e, type) => {
    e.preventDefault();
    await this.setState({
      [type]: e.target.value,
    });
  };
  addTeacher = async (e) => {
    e.preventDefault();
    const teacher = {
      firstName: this.state.newTeacherFirstName,
      lastName: this.state.newTeacherLastName,
      email: this.state.newTeacherEmail,
    };
    await this.props.addTeacher(teacher, this.props.history);
    await this.setState({
      newTeacherFirstName: '',
      newTeacherLastName: '',
      newTeacherEmail: '',
      teacherAdded: true,
    });
  }
  renderTeacherAddedAlert = () => {
    if (!this.state.teacherAdded) return null;
    return (
      <p style={{ color: '#337ab7' }}>Added Teacher has been sent an email to Signup, he/she will be included in list after Signup</p>
    );
  };
  render() {
    return (
      <div>
        <h4 style={{ marginBottom: '40px', marginLeft: '30px' }}>
          Add Teachers
        </h4>
        {this.renderTeacherAddedAlert()}
        <form className="addentry" onSubmit={this.addTeacher}>
          <input
            value={this.state.newTeacherFirstName}
            onChange={e => this.handleInput(e, 'newTeacherFirstName')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="First Name"
          />
          <input
            value={this.state.newTeacherLastName}
            onChange={e => this.handleInput(e, 'newTeacherLastName')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="Last Name"
          />
          <input
            value={this.state.newTeacherEmail}
            onChange={e => this.handleInput(e, 'newTeacherEmail')}
            style={{ fontSize: '13px', border: 'solid 1px #333' }}
            placeholder="Email"
          />
          <div className="Header__nav__buttons">
            <button style={{ width: '80px', height: '100%', fontSize: '13px' }}>
              Add Teacher
            </button>
          </div>
        </form>
        <div className="table">
          <h4 style={{ marginBottom: '40px' }}> Teachers </h4>
          {this.state.teachers.map((teacher) => {
            return (
              <Teacher
                key={teacher._id}
                id={teacher._id}
                firstName={teacher.firstName}
                lastName={teacher.lastName}
                email={teacher.email}
              />
            );
          })}
         
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teachers: state.teachers,
  };
};

export default withRouter(connect(mapStateToProps, { addTeacher, deleteTeacher, getTeachers })(Teachers));
