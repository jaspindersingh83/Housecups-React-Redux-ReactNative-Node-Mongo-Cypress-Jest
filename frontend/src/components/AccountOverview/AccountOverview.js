import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHousesBySchool, getTeachers } from '../../actions'; 
import './AccountOverview.css';

class AccountOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      teachers: [],
    };
    console.warn('AccountOverview ::', 'Get the User\'s name & School name and update in the render()');
  }

  async componentDidMount() {
    await this.props.getHousesBySchool(this.props.history);
    await this.props.getTeachers(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [ ...props.houses ],
      teachers: [ ...props.teachers ],
    });
  }

  render() {
    return (
      <div className="Overview">
        <div className="User">
          <div className="User__name">John Doe</div>
          <div className="User__role">Admin</div>
        </div>
        <div className="School">
          <div className="School__name">Lambda School</div>
          <div className="School__info">
            <div className="School__info__text">
              Total number of Houses:
              <span className="number">{ this.state.houses.length }</span>
            </div>
            <div className="School__info__action">
              <Link to="/houses">See all Houses</Link>
            </div>
          </div>
          <div className="School__info">
            <div className="School__info__text">
              Total number of Teachers:
              <span className="number">{ this.state.teachers.length }</span>
            </div>
            <div className="School__info__action">
              <Link to="/teachers">See all Teachers</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getHousesBySchool, getTeachers })(AccountOverview);
