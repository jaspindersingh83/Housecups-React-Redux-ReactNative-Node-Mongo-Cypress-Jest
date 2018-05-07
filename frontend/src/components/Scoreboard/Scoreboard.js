/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHouses } from '../../actions';
import './Scoreboard.css';
import ScoreCard from './ScoreCard';

class Scoreboard extends Component {

  state = {
    houses: [],
  }

  async componentWillMount() {
    console.log(this.props.history);
    await this.props.getHouses(this.props.history);
  }

  async componentWillReceiveProps(props) {
    console.log('Tri', props.houses[0].score);
    await this.setState({
      houses: [...props.houses],
    });
  }

  render() {
    console.log('Rendering');
    return (
      <div className="Scoreboard">
        {
          this.state.houses.map((house, index) => {
            return <ScoreCard key={house._id} house={house} />;
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getHouses })(Scoreboard);
