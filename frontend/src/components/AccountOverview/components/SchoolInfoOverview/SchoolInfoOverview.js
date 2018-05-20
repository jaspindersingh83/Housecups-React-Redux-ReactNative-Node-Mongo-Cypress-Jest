import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHousesBySchool, getTeachers } from '../../../../actions';
import './SchoolInfoOverview.css';

class SchoolInfoOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      teachers: [],
    };
  }

  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
    await this.props.getTeachers(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [...props.houses],
      teachers: [...props.teachers],
    });
  }

  render() {
    return (
      <div className="SchoolInfoOverview">
        {/* <div className="School__name">Lambda School</div> */}
        <h3 className="form__title">Welcome</h3>
        <div className="School__info">
          <div className="School__info__text">
            Total number of Houses:
            <span className="number">{ this.state.houses.length }</span>
          </div>
          <div className="School__info__action">
            <Link to="/houses">
              <button>See all Houses</button>
            </Link>
          </div>
        </div>
        <div className="School__info">
          <div className="School__info__text">
            Total number of Teachers:
            <span className="number">{ this.state.teachers.length }</span>
          </div>
          <div className="School__info__action">
            <Link to="/teachers">
              <button>See all Teachers</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getHousesBySchool,
  getTeachers,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SchoolInfoOverview));
