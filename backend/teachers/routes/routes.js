const {
  validateEmail,
  hashPassword,
  validatePasswords,
  validateUsername,
} = require('../../auth/middleware/middleware');

const {
  createTeacher,
  deleteTeacher,
  getTeachersBySchool,
  sendTeacherSignupRequest,
} = require('../controllers/TeacherController');

const { authenticate, ifSchoolAdmin, ifTeacher } = require('../../common/common');

module.exports = (server) => {
  server.route('/teacherauth').get(authenticate, ifTeacher);
  server.route('/api/teacher').post(authenticate, ifSchoolAdmin, validateEmail, sendTeacherSignupRequest);
  server.route('/teachersignup').post(authenticate, validateUsername, validatePasswords, hashPassword, createTeacher);
  server.route('/api/teacher').get(authenticate, getTeachersBySchool);
  server.route('/api/teacher/:id').delete(authenticate, ifSchoolAdmin, deleteTeacher);
};
