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
      this.props.history.push('/signin');
    });
  }

  getFontColor = (backgroundColor) => {
    // Returns Font-color
    // based on the luminance of Background-color
    if (new RegExp(/[^a-f0-9#]/gi).test(backgroundColor)) {
      // invalid Hex
      return 'rgb(0, 0, 0)';
    }
    const hexColor = backgroundColor.replace(/#/gi, '');
    // values constant that determines the luminance
    const factor = {
      R: 0.299,
      G: 0.587,
      B: 0.114,
    };
    const midPoint = 100;
    // Convert Hex into rgb array
    const rgb = Array.from(hexColor).reduce((rgbArray, hexDigit, index, hexDigitsArray) => {
      if (index % 2 === 0) {
        const hexValue = hexDigit + hexDigitsArray[index + 1];
        rgbArray.push(parseInt(hexValue, 16));
      }
      return rgbArray;
    }, []);

    const luminance = (rgb[0] * factor.R) + (rgb[1] * factor.G) + (rgb[2] * factor.B);

    return (luminance >= midPoint) ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
  }

  render() {
    const { house } = this.props;
    const styles = {
      ScoreCard: {
        color: this.getFontColor(house.color),
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
          <div className="ScoreCard__score">{house.score}</div>
          <button
            className="ScoreCard__button ScoreCard__button--increment"
            onClick={() => this.increaseScore()}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { updateScore })(ScoreCard));
