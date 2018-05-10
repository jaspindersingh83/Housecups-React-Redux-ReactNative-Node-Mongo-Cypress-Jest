import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import { withRouter } from 'react-router-dom';
import { getHousesBySchool, addHouse } from '../../actions';
import House from './House';
import './House.css';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      displayColorPicker: false,
      color: '#F17013',
      newHouseName: '',
      newHouseMascot: '',
    };
  }
  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      houses: props.houses,
    });
  }
  handleInput = async (e, type) => {
    e.preventDefault();
    await this.setState({
      [type]: e.target.value,
    });
  };
  handleClick = async () => {
    await this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = async () => {
    await this.setState({ displayColorPicker: false });
  };

  handleChange = async (color) => {
    await this.setState({ color: color.hex });
  };
  addHouse = async () => {
    const house = {
      name: this.state.newHouseName,
      color: this.state.color,
      mascot: this.state.newHouseMascot,
    };
    await this.props.addHouse(house, this.props.history);
  }
  render() {
    const styles = {
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
    };
    return (
      <div>
        <h4 style={{ marginBottom: '40px', marginLeft: '30px' }}>
          Add Houses
        </h4>
        <form className="addentry" onSubmit={() => this.addHouse()}>
          <input
            onChange={e => this.handleInput(e, 'newHouseName')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="Name"
          />
          <div>
            <div className="swatch" onClick={this.handleClick}>
              <div className="color" style={{ background: this.state.color }} />
            </div>
            {this.state.displayColorPicker ? (
              <div style={styles.popover}>
                <div className="cover" onClick={this.handleClose} />
                <SketchPicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : null}
          </div>
          <input
            onChange={e => this.handleInput(e, 'newHouseMascot')}
            style={{ fontSize: '13px', border: 'solid 1px #333' }}
            placeholder="Mascot"
          />
          <div className="Header__nav__buttons">
            <button style={{ width: '80px', height: '100%', fontSize: '13px' }}>
              Add House
            </button>
          </div>
        </form>
        <div className="table">
          <h4 style={{ marginBottom: '40px' }}> Houses </h4>
          {this.state.houses.map((house) => {
            return (
              <House
                key={house}
                id={house._id}
                name={house.name}
                color={house.color}
                mascot={house.mascot}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export default withRouter(connect(mapStateToProps, { getHousesBySchool, addHouse })(Houses));
