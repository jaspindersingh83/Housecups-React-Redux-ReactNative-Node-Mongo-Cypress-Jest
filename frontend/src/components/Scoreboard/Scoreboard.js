/* eslint-disable */
import React, { Component } from 'react';
import Socket from 'socket.io-client';
import { connect } from 'react-redux';
import { getHousesBySchool } from '../../actions';
import './Scoreboard.css';
import ScoreCard from './ScoreCard';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
    this.initializeSocket();
  }

  componentWillMount() {
    this.getHouses();
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      houses: [...props.houses],
    });
  }

  getHouses = async () => {
    await this.props.getHousesBySchool(this.props.history);
  }

  initializeSocket = () => {
    // Initialize Socket
    this.socket = Socket('http://127.0.0.1:5000');
    // Receives Response after the update
    this.socket.on('updateScoreResponse', (response) => {
      this.getHouses();
    });
    // Error Handling
    this.socket.on('error', (data) => {
      this.props.history.push('/signin');
    });
  }

  render() {
    return (
      <div className="Scoreboard">
        <div className="Scoreboard__heading">
          <div className="Scoreboard__title">Current Score</div>
        </div>
        <div className="Scoreboard__cards">
          {
            this.state.houses.map((house, index) => {
              return <ScoreCard key={house._id} house={house} socket={this.socket} />;
            })
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

<<<<<<< HEAD
export default connect(mapStateToProps, { getHousesBySchool })(Scoreboard);
=======
export default connect(mapStateToProps, { getHousesBySchool, updateScore })(Scoreboard);
>>>>>>> 6bd5d8245ba81e2f4fe840f0db1a2dbb049b5699
