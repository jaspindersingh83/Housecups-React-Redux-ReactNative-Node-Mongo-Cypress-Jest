import React, { Component } from 'react';
import Section from '../Section/Section';
import AddTeacher from './AddTeacher';
import AddSchoolNameForm from './AddSchoolNameForm';


class SchoolInfo extends Component {

  constructor() {
    super();
    this.state = {
      schoolName: "",
    }
  }

  handleInputName = (event) => {
    this.setState({
      schoolName: event.target.value,
    })
  }
  handleInputEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }
  handleButtonClick = (event) => {
    this.setState({

    })
  }

  // handleSubmit = (event) =>{
  //   event.preventDefault();

  //   const teacherinfo = {
  //     name: this.state.schoolName,
  //     email: this.state.teacherEmail,
  //   }
  //   axios.post('http://localhost:5000', teacherinfo)
  //   .then()
  //   .catch()
  // }
  render() {
    return(
      <div>
        <Section className="create_Schools">
          <AddSchoolNameForm />
          <AddTeacher />
        </Section>
      </div>
    );
  }
}

export default SchoolInfo;
