import React, { Component } from 'react';
import Checkout from './Checkout';


class StripePaymentButton extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={20}
          />
        </div>
      </div>
    );
  }
}

export default StripePaymentButton;