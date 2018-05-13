const {
  addSchool,
  getAllSchools,
} = require('../controllers/SchoolController');

const { authenticate, ifSchoolAdmin } = require('../../common/common');

module.exports = (server) => {
  server.route('/schooladmin').get(authenticate, ifSchoolAdmin)
  server.route('/api/schools').post(authenticate, addSchool);
  server.route('/api/schools').get(getAllSchools);
};
