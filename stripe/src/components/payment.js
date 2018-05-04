import React, { Component } from 'react';

class Stripe extends Component {

  componentDidMount() {

    const script = document.createElement('script');
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.setAttribute('data-key', 'pk_test_1ENvPvHwX9kBUaPKsvmU2XZF');
    script.setAttribute('data-amount', '999');
    script.setAttribute('data-name', 'Stripe.com');
    script.setAttribute('data-description', 'Example charge')
    script.setAttribute('data-image', 'https://stripe.com/img/documentation/checkout/marketplace.png');
    script.setAttribute('data-locale', 'auto');
    script.setAttribute('data-zip-code', 'true');
    script.setAttribute('class', 'stripe-button');


    document.getElementById('StripeForm').appendChild(script);


  }

  render() {
    return (
      <form action="api/payment" method="POST" id="StripeForm">

      </form>
    )
  }

}

export default Stripe;
