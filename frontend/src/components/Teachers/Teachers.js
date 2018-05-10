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
    };
  }
  // async componentWillMount() {
  //   await this.props.getTeachers(this.props.history);
  // }
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
    });
  }
  render() {
    return (
      <div>
        <h4 style={{ marginBottom: '40px', marginLeft: '30px' }}>
          Add Teachers
        </h4>
        <form className="addentry" onSubmit={(e) => this.addTeacher(e)}>
          <input
            onChange={e => this.handleInput(e, 'newTeacherFirstName')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="First Name"
          />
          <input
            onChange={e => this.handleInput(e, 'newTeacherLastName')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="Last Name"
          />
          <input
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
          {/* {this.state.teachers.map((teacher) => {
            return (
              <Teacher
                key={teacher}
                id={teacher._id}
                firstName={teacher.firstName}
                email={teacher.email}
              />
            );
          })}
          */}
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
