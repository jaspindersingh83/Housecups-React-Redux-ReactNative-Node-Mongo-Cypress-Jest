import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import { deleteHouse, updateHouse } from '../../actions';
import './House.css';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      color: props.color,
      mascot: props.mascot,
      gettingUpdated: false,
      displayColorPicker: false,
    };
  }
  gettingUpdated = async (e) => {
    e.preventDefault();
    await this.setState({
      gettingUpdated: true,
    });
  }
  handleInput = async (e, type) => {
    e.preventDefault();
    await this.setState({
      [type]: e.target.value,
    });
  };

  // color picker functions
  handleClick = async () => {
    await this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = async () => {
    await this.setState({ displayColorPicker: false });
  };
  handleChange = async (color) => {
    await this.setState({ color: color.hex });
  };
  //
  deleteHouse = async (id) => {
    await this.props.deleteHouse(id, this.props.history);
  }
  updateHouse = async (e) => {
    e.preventDefault();
    await this.props.updateHouse(this.state, this.props.history);
  }
  render() {
    const updating = this.state.gettingUpdated;
    const styles = {
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
    };
    return (
      <div>
        {updating ? (
          <form className="tableitem" onSubmit={(e) => this.updateHouse(e)}>
            <input
              style={{ width: '40%', fontSize: '14px', height: '60%', marginRight: '20px' }}
              onChange={e => this.handleInput(e, 'name')}
              value={this.state.name}
              type="text"
            />
            <div className="swatch" onClick={this.handleClick} style={{ height: '25px' }}>
              <div className="color" style={{ background: this.state.color, height: '13px' }} />
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
            <input
              style={{ width: '30%', fontSize: '14px', height: '60%', marginRight: '20px' }}
              onChange={e => this.handleInput(e, 'mascot')}
              value={this.state.mascot}
              type="text"
            />
            <div className="Header__nav__buttons">
              <button style={{ width: '80px', height: '100%', fontSize: '13px' }}>
              Update
              </button>
            </div>
          </form>
        )
        : (
          <div className="tableitem" >
            <div className="tableitem__name">
              {this.state.name}
            </div>
            <div className="swatch" style={{ height: '25px' }}>
              <div className="color" style={{ background: this.state.color, height: '13px' }} />
            </div>
            <div className="tableitem__mascot">
              {this.state.mascot}
            </div>
            <Glyphicon
              style={{ marginRight: '40px' }}
              glyph="pencil"
              onClick={this.gettingUpdated}
            />
            <Glyphicon
              glyph="trash"
              onClick={() => this.deleteHouse(this.state.id)}
            />
          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, { deleteHouse, updateHouse })(House));

