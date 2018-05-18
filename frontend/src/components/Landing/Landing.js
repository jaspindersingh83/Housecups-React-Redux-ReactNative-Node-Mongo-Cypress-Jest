import React, { Component } from 'react';
import './Landing.css';
import Section from '../Section/Section';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';

class Landing extends Component {
  state = {}
  render() {
    return (
      <div className="Landing">

        <Section className="Intro">
          <div className="Intro__content">
            <p className="Intro__content__summary">
              Encourage&nbsp;students by rewarding them for their good&nbsp;work.
            </p>
          </div>
          <div className="Intro__animatable">
            <div className="Animatable">
              <div className="Animatable__card" />
              <div className="Animatable__card" />
              <div className="Animatable__card" />
              <div className="Animatable__card" />
            </div>
          </div>
        </Section>

        <Features />
        <Pricing />

      </div>
    );
  }

}

export default Landing;
