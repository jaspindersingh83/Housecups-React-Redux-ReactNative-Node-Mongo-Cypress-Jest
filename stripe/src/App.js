import React, { Component } from 'react';
import Stripe from './components/payment'
// import PaymentSuccess from './components/paymentsuccess';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stripe />
      </div>
    );
  }
}

export default App;
