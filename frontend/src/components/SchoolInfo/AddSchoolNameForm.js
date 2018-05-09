import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addSchool } from '../../actions';

class AddTeacherForm extends Component {
  constructor() {
    super();
    this.state ={
      name:''
    }
    console.info('implement add teacher form for handle submit function');
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    // this.props.addSchool({ name }, this.props.history) 
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="School Name" value={this.state.name} onChange={this.handleInput} />
        </div>
      </form>
    );
    }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  //addSchools,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacherForm);
