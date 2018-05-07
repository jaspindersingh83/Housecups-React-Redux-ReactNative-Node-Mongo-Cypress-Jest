import React, { Component } from 'react';
import Section from '../Section/Section';


class SchoolInfo extends Component {
  render() {
    return(
      <div>
        <Section className="create_Schools">
          <div className="school_info">
          <div><input type="text" /></div>
          <div><input type="text" /><button>Add Teacher</button>></div>
          </div>
        </Section>
      </div>
    );
  }
}

export default SchoolInfo;
