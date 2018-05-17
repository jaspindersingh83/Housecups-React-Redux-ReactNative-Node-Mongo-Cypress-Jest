import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHousesBySchool, addHouse } from '../../actions';
import './Houses.css';
import CreateHouse from './components/CreateHouse/CreateHouse';
import ListHouses from './components/ListHouses/ListHouses';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      houses: [...props.houses],
    });
  }

  render() {
    return (
      <div className="Houses">
        <CreateHouse />
        <ListHouses houses={this.state.houses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export default withRouter(connect(mapStateToProps, { getHousesBySchool, addHouse })(Houses));
