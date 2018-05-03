import React, { Component } from 'react';
import './Landing.css';
import Section from '../Section/Section';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">

        <Section className="Intro">

          <div className="Intro__content">
            <div className="Intro__content__headline">
              Welcome to House Cup
            </div>
            <div className="Intro__content__summary">
              Encourage students by rewarding them for&nbsp;their&nbsp;good&nbsp;work.
            </div>
            <div className="Intro__content__buttons">
              <button>Create your School</button>
            </div>
          </div>
          <div className="Intro__image"></div>

        </Section>

      </div>
    );
  }

}

export default Landing;
