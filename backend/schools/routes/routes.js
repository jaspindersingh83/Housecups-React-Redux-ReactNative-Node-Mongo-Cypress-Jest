const {
  getSchoolInfo,
} = require('../controllers/SchoolController');

module.exports = (server) => {
  server.route('/api/school/:name').get(getSchoolInfo);
};
