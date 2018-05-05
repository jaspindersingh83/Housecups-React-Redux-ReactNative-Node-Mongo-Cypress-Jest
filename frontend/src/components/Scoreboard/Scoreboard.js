/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHouses } from '../../actions';
import './Scoreboard.css';

class Scoreboard extends Component {

  state = {
    houses: [],
  }



  async componentWillMount() {
    await this.props.getHouses(this.props.history);
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      houses: props.houses,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="Scoreboard">
        {
          this.state.houses.map((house, index) => {            
            console.log(house)
            const styles = {
              ScoreCard: {
                backgroundColor: house.color,
              },
            };
            return (
              <div className="ScoreCard" key={house._id} style={styles.ScoreCard}>
                <div className="ScoreCard__house">
                  <div className="ScoreCard__house-name">{house.name}</div>
                  <div className="ScoreCard__house-mascot">{house.mascot}</div>
                </div>
                <div className="ScoreCard__actions">
                  <button className="ScoreCard__button ScoreCard__button--decrement">
                    <div className="img" />
                  </button>
                  <button className="ScoreCard__button ScoreCard__button--increment">
                    <div className="img" />
                  </button>
                </div>
                <div className="ScoreCard__score">{house.score}</div>
              </div>
            )
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
