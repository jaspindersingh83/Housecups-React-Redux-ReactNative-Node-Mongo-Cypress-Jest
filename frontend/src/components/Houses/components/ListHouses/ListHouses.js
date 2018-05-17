import React, { Component } from 'react';
import House from '../House/House';
import './ListHouses.css';

class ListHouses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: props.houses,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [...props.houses],
    });
  }

  render() {
    return (
      <div className="ListHouses Table">
        <h3 className="Table__title">Houses</h3>
        <div className="Table__row Table__row--head" >
          <div className="Table__column">House Name</div>
          <div className="Table__column Table__column--color-swatch">Color</div>
          <div className="Table__column">Mascot</div>
          <div className="Table__column Table__column--action" />
          <div className="Table__column Table__column--action" />
        </div>
        {
          this.state.houses.map((house) => {
            return (
              <House
                key={house._id}
                id={house._id}
                name={house.name}
                color={house.color}
                mascot={house.mascot}
              />
            );
          })
        }
      </div>
    );
  }

}

export default ListHouses;
