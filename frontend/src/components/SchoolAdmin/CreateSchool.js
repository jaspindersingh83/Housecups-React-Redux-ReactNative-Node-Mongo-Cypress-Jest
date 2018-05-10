/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houses from '../Houses/Houses';
import { addSchool } from '../../actions';

class Createschool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      location: ''
    };
  }

  handleInput = async (e, type) => {
    e.preventDefault();
    await this.setState({
      [type]: e.target.value,
    });
  };

  addSchool = async (e) => {
    e.preventDefault();
    const school = {
      name: this.state.name,
      location: this.state.location,
    };
    await this.props.addSchool(school, this.props.history);
  }

  render() {
    return (
      <div>
        <h4 style={{ marginBottom: '40px', marginLeft: '30px' }}>
          Add School
        </h4>
        <form className="addentry" onSubmit={e => this.addSchool(e)}>
          <input
            onChange={e => this.handleInput(e, 'name')}
            style={{
              fontSize: '13px',
              marginRight: '20px',
              border: 'solid 1px #333',
            }}
            placeholder="Name"
          />
          <input
            onChange={e => this.handleInput(e, 'location')}
            style={{ fontSize: '13px', border: 'solid 1px #333' }}
            placeholder="Location"
          />
          <div className="Header__nav__buttons">
            <button style={{ width: '80px', height: '100%', fontSize: '13px' }}>
              Add School
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addSchool })(Createschool);