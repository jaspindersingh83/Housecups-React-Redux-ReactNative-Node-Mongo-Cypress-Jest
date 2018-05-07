import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateScore } from '../../actions/index.ws';

import Socket from '../../websocket';

class ScoreCard extends Component {

  componentDidMount() {
    // Initialize
    this.changeScore(0);
  }

  increaseScore = () => {
    this.changeScore(1);
  }

  decreaseScore = () => {
    this.changeScore(-1);
  }

  changeScore = (change) => {
    // Sends Request to update score
    Socket.emit('updateScoreRequest', {
      _id: this.props.house._id,
      scoreChange: change,
      Authorization: localStorage.getItem('token'),
    });
    // Receives Response after the update
    Socket.on('updateScoreResponse', (response) => {
      this.props.updateScore(response);
    });
    // Error Handling
    Socket.on('error', (data) => {
      console.log(data);
      this.props.history.push('/signin');
    });
  }

  render() {
    const { house } = this.props;
    const styles = {
      ScoreCard: {
        backgroundColor: house.color,
      },
    };

    return (
      <div className="ScoreCard" style={styles.ScoreCard}>
        <div className="ScoreCard__house">
          <div className="ScoreCard__house-name">{house.name}</div>
          <div className="ScoreCard__house-mascot">{house.mascot}</div>
        </div>
        <div className="ScoreCard__actions">
          <button
            className="ScoreCard__button ScoreCard__button--decrement"
            onClick={() => this.decreaseScore()}
          />
          <button
            className="ScoreCard__button ScoreCard__button--increment"
            onClick={() => this.increaseScore()}
          />
        </div>
        <div className="ScoreCard__score">{house.score}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { updateScore })(ScoreCard));
