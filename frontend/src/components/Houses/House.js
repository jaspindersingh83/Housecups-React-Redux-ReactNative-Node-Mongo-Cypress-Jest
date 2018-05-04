import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Glyphicon, Button } from 'react-bootstrap';
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
  deleteHouse = async (id) => {
    await this.props.deleteHouse(id, this.props.history);
  }
  updateHouse = async () => {
    await this.props.updateHouse(this.state, this.props.history);
  }
  render() {
    const updating = this.state.gettingUpdated;
    return (
      <div>
        {updating ? (
          <form className="tableitem" onSubmit={() => this.updateHouse(this.state.id)}>
            <input
              style={{ width: '40%', fontSize: '14px', height: '60%' }}
              onChange={e => this.handleInput(e, 'name')}
              value={this.state.name}
              type="text"
            />
            <input
              style={{ width: '30%', fontSize: '14px', height: '60%' }}
              onChange={e => this.handleInput(e, 'color')}
              value={this.state.color}
              type="text"
            />
            <input
              style={{ width: '30%', fontSize: '14px', height: '60%' }}
              onChange={e => this.handleInput(e, 'mascot')}
              value={this.state.mascot}
              type="text"
            />
            <Button
              style={{
              width: '80px',
              fontSize: '12px',
              height: '60%',
              marginLeft: '20px',
              textAlign: 'center',
             }}
              bsStyle="primary"
              type="submit"
            >
              Update
            </Button>
          </form>
        )
        : (
          <div className="tableitem" >
            <div className="tableitem__name">
              {this.state.name}
            </div>
            <div className="tableitem__color">
              {this.state.color}
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

export default connect(mapStateToProps, { deleteHouse, updateHouse })(House);

