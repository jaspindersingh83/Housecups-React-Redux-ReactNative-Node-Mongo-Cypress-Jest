import React, { Component } from 'react';
import Section from '../Section/Section';


class SchoolInfo extends Component {
  render() {
    return(
      <div>
        <Section className="create_Schools">
          <div className="school_info">
           <input type="text" /> 
          </div>
        </Section>
      </div>
    );
  }
}

export default SchoolInfo;
