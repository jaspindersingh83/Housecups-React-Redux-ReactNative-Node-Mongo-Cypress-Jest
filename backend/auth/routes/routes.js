const {
  validateEmail,
  hashPassword,
  matchPassword,
  validatePasswords,
  validateUsername,
} = require('../middleware/middleware');
const { authenticate } = require('../../common/common');

const {
  createUser,
  getUsers,
  signin,
  ifAdmin,
  signout,
  forgotPassword,
  sendResetEmailAndRedirect,
  updateUserPassword,
  sendResetPasswordEmail,
} = require('../controllers/UserController');

module.exports = (server) => {
  server
    .route('/signup')
    .post(
      validateUsername,
      validatePasswords,
      validateEmail,
      hashPassword,
      createUser,
    );
  server.route('/signin').post(matchPassword, signin);
  server.route('/signout').get(authenticate, signout);
  server
    .route('/forgotpassword')
    .post(forgotPassword, sendResetEmailAndRedirect);
  server
    .route('/reset')
    .post(
      authenticate,
      validatePasswords,
      hashPassword,
      updateUserPassword,
      sendResetPasswordEmail,
    );
<<<<<<< HEAD
=======
  server
    .route('/settings')
    .post(
      authenticate,
      validatePasswords,
      validateEmail,
      hashPassword,
      updateUserPassword,
      sendResetPasswordEmail,
    );
>>>>>>> e6cd7da16e5ae6336067a9f99bf0c2e7a83ccd9e
};
