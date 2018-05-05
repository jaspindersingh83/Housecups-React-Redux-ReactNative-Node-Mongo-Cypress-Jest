const {
  addSchool,
  getAllSchools,
} = require('../controllers/SchoolController');

const { authenticate } = require('../../common/common');

module.exports = (server) => {
  server.route('/schools').post(addSchool);
  server.route('/schools').get(getAllSchools);
};
