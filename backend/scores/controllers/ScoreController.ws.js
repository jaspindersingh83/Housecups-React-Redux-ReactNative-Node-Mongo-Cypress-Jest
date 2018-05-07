/* Score Model not created */
const House = require('../../houses/models/HouseModel');
const moment = require('moment');

const updateScore = async (data, io) => {
  const { _id, scoreChange } = data;
  let response = null;
  try {
    const house = await House.findById(_id);
    const newUpdate = {
      score: house.score + scoreChange,
      updatedAt: moment(),
    };
    const updatedHouse = await House.findByIdAndUpdate(_id, newUpdate, { new: true });
    response = {
      message: 'Score has been updated!',
      house: updatedHouse,
    };
  } catch (error) {
    response = {
      message: error,
    };
  }
  io.emit('updateScoreResponse', response);
};

module.exports = {
  updateScore,
};
