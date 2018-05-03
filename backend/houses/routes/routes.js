const {
  addHouse,
  deleteHouse,
  updateHouse,
  getHouses,
} = require('../controllers/HouseController');

// const { authenticate } = require('../../common/common');

module.exports = (server) => {
  server.route('/api/house').post(addHouse);
  server.route('/api/house').get(getHouses);
  server.route('/api/house/:id').delete(deleteHouse);
  server.route('/api/house/:id').put(updateHouse);
};
