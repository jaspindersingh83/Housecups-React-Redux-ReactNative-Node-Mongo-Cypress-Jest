import React, { Component } from 'react';
import './Section.css';

class Section extends Component {

  render() {
    return (
      <section { ...this.props } >
        <div className="wrapper">
          {this.props.children}
        </div>
      </section>
    );
  }

}

export default Section;
