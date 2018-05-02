import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import House from './House';
import './Houses.css';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      newHouseName: '',
      newHouseColor: undefined,
    };
  }
  // handlenameInput = async (e) => {
  //   e.preventdefault();
  //   await this.setState({
  //     newHouseName: e.target.value,
  //   });
  // }
  // handlecolorInput = async (e) => {
  //   e.preventdefault();
    
  // }
  render() {
    return (
      <div>
        {this.state.houses.map((house) => {
          <House id={house.id} name={house.name} color = {house.color} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

export default connect(mapStateToProps, { getAllHouses })(Houses);
