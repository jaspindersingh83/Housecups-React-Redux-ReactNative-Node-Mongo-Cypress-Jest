import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHousesBySchool } from '../../actions';
import ListHouses from './components/ListHouses/ListHouses';
import './ListHousesView.css';

class ListHousesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [...props.houses],
    });
  }

  render() {
    return (
      <div className="ListHousesView">
        <ListHouses houses={this.state.houses} />
        <Link to="/houses/create">
          <button>Add New House</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export default withRouter(connect(mapStateToProps, { getHousesBySchool })(ListHousesView));
