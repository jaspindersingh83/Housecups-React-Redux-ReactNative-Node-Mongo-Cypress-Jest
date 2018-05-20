import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeachers } from '../../../../actions';
import './ListTeachers.css';
import Teacher from '../Teacher/Teacher';
import DashboardNotification from '../../../DashboardNotification/DashboardNotification';

class ListTeachers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teachers: props.teachers,
      receivedTeachers: false,
    };
  }

  async componentWillMount() {
    await this.props.getTeachers(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      teachers: [...props.teachers],
      receivedTeachers: true,
    });
  }

  renderNoTeacherWarning = () => {
    if (this.state.receivedTeachers) {
      return (
        <DashboardNotification type="warn">
          You haven't added any teachers yet.
        </DashboardNotification>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="ListTeachers Table">
        <h3 className="table__title">Added Teachers</h3>
        {
          (this.state.teachers.length === 0)
            ? this.renderNoTeacherWarning()
            : (
              <div className="Table__row Table__row--head" >
                <div className="Table__column">Name</div>
                <div className="Table__column">Email Address</div>
                <div className="Table__column Table__column--action" />
              </div>
            )
        }
        {
          this.state.teachers.map((teacher) => {
            return (
              <Teacher
                key={teacher._id}
                id={teacher._id}
                firstName={teacher.firstName}
                lastName={teacher.lastName}
                email={teacher.email}
              />
            );
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getTeachers })(ListTeachers));
