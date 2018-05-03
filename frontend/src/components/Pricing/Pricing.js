import React, { Component } from 'react';
import './Pricing.css';
import Section from '../Section/Section';

class Pricing extends Component {

  render() {
    return (
      <Section className="Pricing">

        <h1>Pricing</h1>
        <p>Our packages are priced based on the number of <u>Teachers</u> and <u>Houses</u>.</p>

        <div className="Pricing__packages">

          <div className="Package">
            <div className="Package__name">
              Starter
            </div>
            <div className="Package__details">
              <ul>
                <li>up to 1 Teacher</li>
                <li>up to 2 Houses</li>
              </ul>
            </div>
            <div className="Package__price">
              <div className="Package__price__amount">$ 9.99</div>
              <div className="Package__price__term">monthly</div>
            </div>
            <div className="Package__button">
              <button>Select</button>
            </div>
          </div>
          <div className="Package Package--best-value">
            <div className="Package__name">
              Intermediate
              <div className="Package__name__bestValue">(Best Value)</div>
            </div>
            <div className="Package__details">
              <ul>
                <li>up to 10 Teachers</li>
                <li>up to 20 Houses</li>
              </ul>
            </div>
            <div className="Package__price">
              <div className="Package__price__amount">$ 29.99</div>
              <div className="Package__price__term">monthly</div>
            </div>
            <div className="Package__button">
              <button>Select</button>
            </div>
          </div>
          <div className="Package">
            <div className="Package__name">
              Premium
            </div>
            <div className="Package__details">
              <ul>
                <li>more than 10 Teachers</li>
                <li>more than 20 Houses</li>
              </ul>
            </div>
            <div className="Package__price">
              <div className="Package__price__amount">$ 49.99</div>
              <div className="Package__price__term">monthly</div>
            </div>
            <div className="Package__button">
              <button>Select</button>
            </div>
          </div>

        </div>

      </Section>
    );
  }

}

export default Pricing;
