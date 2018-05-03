const House = require('../models/HouseModel.js');

// add houses
const addHouse = (req, res) => {
  const houseInfo = req.body;
  const house = new House(houseInfo);
  house.save()
    .then((newhouse) => {
      res.status(201).json(newhouse);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error whilst saving the house to the database', error });
    });
};
// delete houses
const deleteHouse = (req, res) => {
  const { id } = req.params.id;
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
  console.log('in get houses')
  House.find({})
    .then((houses) => {
      res.status(200).json(houses);
    })
    .catch((error) => {
      res.status(500).json({ message: 'No such house in database', error });
    });
};

// update/edit house
const updateHouse = (req, res) => {
  const { id } = req.params.id;
  const houseInfo = req.body;

  House.findByIdAndUpdate(id, houseInfo)
    .then((house) => {
      res.status(200).json({ message: 'House has been updated!', house });
    })
    .catch((error) => {
      res.status(500).json({ message: 'The information cannot be updated because it is invalid', error });
    });
};


module.exports = {
  addHouse,
  deleteHouse,
  updateHouse,
  getHouses,
};