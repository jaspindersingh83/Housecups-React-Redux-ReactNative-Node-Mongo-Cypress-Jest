import React, { Component } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHousesBySchool } from '../../actions';
import ListHouses from './components/ListHouses/ListHouses';
import './ListHousesView.css';
import { stat } from 'fs';

class ListHousesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      getHousesResolved: false,
    };
  }

  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [...props.houses],
      getHousesResolved: props.houses !== undefined,
    });
  }

  render() {
    return (
      <div className="ListHousesView">
        {
          (this.state.getHousesResolved) ?
            (
              (this.state.houses.length > 0) ?
                <ListHouses houses={this.state.houses} /> :
                <Redirect to={{
                    pathname: '/houses/create',
                    state: {
                      message: 'You don\'t have any houses yet, create one below.',
                    },
                  }} 
                /> 
            ): null
        }
        <Link to="/houses/create">
          <button>Add New House</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getHousesBySchool })(ListHousesView));
