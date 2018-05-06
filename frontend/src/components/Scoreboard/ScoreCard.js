import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateScore } from '../../actions';

class ScoreCard extends Component {

  increaseScore = () => {
    const house = {
      _id: this.props.house._id,
      score: this.props.house.score + 1 || 0,
    };
    this.props.updateScore(house, this.props.history);
  }

  decreaseScore = () => {
    const house = {
      _id: this.props.house._id,
      score: this.props.house.score - 1 || 0,
    };
    this.props.updateScore(house, this.props.history);
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
