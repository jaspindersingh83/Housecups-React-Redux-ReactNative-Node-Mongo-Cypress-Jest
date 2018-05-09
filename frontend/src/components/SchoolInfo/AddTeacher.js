import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addTeacher } from '../../actions';

class AddTeacherForm extends Component {
  constructor() {
    super();
    this.state ={
      teachers:[],
      newInput: '',
    }
    console.info('implement add teacher form for handle submit function');
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      newInput: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      teachers: [
        ...this.state.teachers, 
        this.state.newInput.trim()
      ],
      newInput: '',
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Teacher Email" value={this.state.newInput} onChange={this.handleInput} />
            <button onClick={this.handleSubmit}>Add Teacher</button>
          </div>
        </form>
        <ul>
          {
            this.state.teachers.map((email, index) => {
              return (<li key={index}>{email}</li>);
            })
          }
        </ul>
      </div>
    );
    }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  //addTeacher,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacherForm);
