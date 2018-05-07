const { createPayment } = require('../controllers/PaymentController');

module.exports = (server) => {
  server
    .route('/payment')
    .post(createPayment);
};
