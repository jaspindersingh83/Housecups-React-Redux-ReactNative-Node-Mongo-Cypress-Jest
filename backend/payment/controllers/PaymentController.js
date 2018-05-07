const stripe = require('../stripe');

const createPayment = (req, res) => {
  const {
    description,
    source,
    currency,
    amount, 
  } = req.body;
  const paymentRequest = { // security reasons for creating paymentRequest variable;
    description, 
    source,
    currency,
    amount, 
  };
  console.log(stripe.charges);
  stripe.charges.create(paymentRequest, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
}

module.exports = { createPayment };
