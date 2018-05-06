const {
  validateEmail,
  hashPassword,
  validatePasswords,
  validateUsername,
} = require('../../auth/middleware/middleware');

const {
  addAsNonSignedTeacher,
  createTeacher,
  deleteTeacher,
  getTeachersBySchool,
  getTeacherById,
  sendTeacherSignupRequest,
  sendTeacherSignedUpEmail,
} = require('../controllers/TeacherController');

const { authenticate } = require('../../common/common');

module.exports = (server) => {
  server.route('/api/teacher').post(authenticate, validateEmail, addAsNonSignedTeacher, sendTeacherSignupRequest);
  server.route('/teachersignup').post(authenticate, validateUsername, validatePasswords, hashPassword, createTeacher);
  server.route('/api/teacher').get(authenticate, getTeachersBySchool);
  server.route('/api/teacher/:id').get(getTeacherById);
  server.route('/api/teacher/:id').delete(deleteTeacher);
};
