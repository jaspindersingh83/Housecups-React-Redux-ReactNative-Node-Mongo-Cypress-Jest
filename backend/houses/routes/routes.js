const {
  addHouse,
  deleteHouse,
  updateHouse,
  getHouseBySchool,
} = require('../controllers/HouseController');

const { authenticate, ifSchoolAdmin } = require('../../common/common');

module.exports = (server) => {
  server.route('/api/house').post(authenticate, addHouse);
  server.route('/api/house').get(authenticate, getHouseBySchool);
  server.route('/api/house/:id').delete(authenticate, ifSchoolAdmin, deleteHouse);
  server.route('/api/house/:id').put(authenticate, ifSchoolAdmin, updateHouse);
};
