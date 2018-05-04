import React, { Component } from 'react';

class PaymentSuccess extends Component {

  componentDidMount() {

    const script1 = document.createElement('script');
    script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';

    const script2 = document.createElement('script')
    script2 .src ='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';

    document.getElementById('box').appendChild(script1);
    document.getElementById('box').appendChild(script2);


  }

  render() {
    return (
        <div id="Box">
         <p>Congratulations!</p>
            <div class="alert alert-success">
            <strong>Your Payment has been Successful!</strong>
        </div>
        <dl class="dl-horizontal">
        </dl>
    </div>
    )
  }

}

export default PaymentSuccess;
