const House = require('../models/HouseModel.js');
const moment = require('moment');

// add houses
const addHouse = async (req, res) => {
  const { name, mascot } = req.body;
  let { color } = req.body;
  color = '#' + color.r.toString(16) + color.g.toString(16) + color.b.toString(16) + (color.a * 255).toString(16).substring(0,2)
  try {
    const result = await House.create({
      name,
      color,
      mascot,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// delete houses
const deleteHouse = (req, res) => {
  const { id } = req.params;
  House.findByIdAndRemove(id)
    .then((house) => {
      res.status(200).json({ success: true, house });
    })
    .catch((error) => {
      res.status(500).json({ message: 'No such house in database', error });
    });
};
// get Houses
const getHouses = (req, res) => {
  House.find({})
    .then((houses) => {
      res.status(200).json(houses);
    })
    .catch((error) => {
      res.status(500).json({ message: 'No such house in database', error });
    });
};

// update/edit house
const updateHouse = async (req, res) => {
  const { id } = req.params;
  const houseInfo = req.body;
  houseInfo.updatedAt = moment();
  try {
    const house = await House.findByIdAndUpdate(id, houseInfo);
    res.status(200).json({ message: 'House has been updated!', house });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


module.exports = {
  addHouse,
  deleteHouse,
  updateHouse,
  getHouses,
};
