/* eslint-disable */
import React, { Component } from 'react';
import Socket from 'socket.io-client';
import { connect } from 'react-redux';
import { getHousesBySchool } from '../../actions';
import './Scoreboard.css';
import ScoreCard from './ScoreCard';

class PublicScoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schoolId: props.match.params.schoolId,
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
      // this.props.history.push('/signin');
    });
  }

  render() {
    console.log(this.state.schoolId);
    return (
      <div className="Scoreboard">
        <div className="Scoreboard__heading">
          <div className="Scoreboard__title">Current Score</div>
          <div className="Scoreboard__subtitle">Lambda School (Online)</div>
        </div>
        <div className="Scoreboard__cards">
          {
            this.state.houses.map((house, index) => {
              return <ScoreCard key={house._id} house={house} socket={this.socket} public={true} />;
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

export default connect(mapStateToProps, { getHousesBySchool })(PublicScoreboard);
