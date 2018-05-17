import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeachers } from '../../actions';
import ListTeachers from './components/ListTeachers/ListTeachers';
import './ListTeachersView.css';

class ListTeachersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  async componentWillMount() {
    await this.props.getTeachers(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      teachers: [...props.teachers],
    });
  }

  render() {
    return (
      <div className="ListTeachersView">
        <ListTeachers teachers={this.state.teachers} />
        <Link to="/teachers/create">
          <button>Add New Teacher</button>
        </Link>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getTeachers })(ListTeachersView));
