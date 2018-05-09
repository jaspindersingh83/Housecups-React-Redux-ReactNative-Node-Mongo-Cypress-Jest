/* eslint-disable */
import React, { Component } from 'react';
import Socket from 'socket.io-client';
import { connect } from 'react-redux';
import { getSchoolInfo } from '../../actions';
import { updateScore } from '../../actions/index.ws';
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

  async componentWillMount() {
    await this.props.getSchoolInfo(this.state.schoolId, this.props.history);
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      houses: [...props.houses],
    });
  }

  initializeSocket = () => {
    // Initialize Socket
    this.socket = Socket('http://127.0.0.1:5000');
    // Receives Response after the update
    this.socket.on('updateScoreResponse', (response) => {
      this.props.updateScore(response);
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
        {
          this.state.houses.map((house, index) => {
            return <ScoreCard key={house._id} house={house} socket={this.socket} public={true} />;
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSchoolInfo, updateScore })(PublicScoreboard);
