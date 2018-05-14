import React, { Component } from 'react';
import Checkout from './Checkout';


class StripePaymentButton extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Checkout
            name={'Activate'}
            description={'Enter your payment details'}
            amount={20}
          />
        </div>
      </div>
    );
  }
}

export default StripePaymentButton;