const House = require('../models/HouseModel.js');
const School = require('../../schools/models/SchoolModel');
const moment = require('moment');

// add houses
const addHouse = async (req, res) => {
  const houseInfo = req.body;
  const { schoolID } = req.decoded;
  houseInfo.schoolID = schoolID;
  try {
    const house = await House.create(houseInfo);
    await School.findOneAndUpdate(
      { _id: schoolID },
      { $push: { houses: house } },
    );
    res.status(201).json(house);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// delete houses
const deleteHouse = async (req, res) => {
  const houseID = req.params.id;
  try {
    const house = await House.findById(houseID);
    const { schoolID } = house;
    await School.findOneAndUpdate(
      { _id: schoolID },
      { $pull: { houses: houseID } },
    );
    const removedHouse = await House.findByIdAndRemove(houseID);
    res.status(200).json({ success: true, removedHouse });
  } catch (error) {
    res.status(500).json({ message: 'No such house in database', error });
  }
};
// get all Houses
const getHouseBySchool = async (req, res) => {
  const { schoolID } = req.decoded;
  console.log(schoolID);
  try {
    const school = await School.findById(schoolID);
    const { houses } = school;
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: 'No such house in database', error });
  }
};

// get House by Id not needed
// const getHouseById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const house = await House.findById(id);
//     res.status(200).json(house);
//   } catch (error) {
//     res.status(500).json({ message: 'No such house in database', error });
//   }
// };

// update/edit house //used for changing score as well
const updateHouse = async (req, res) => {
  const { schoolID } = req.decoded;
  const houseID = req.params.id;
  const houseInfo = req.body;
  houseInfo.updatedAt = moment();
  try {
    const house = await House.findByIdAndUpdate(houseID, houseInfo);
    await School.findOneAndUpdate(
      { _id: schoolID },
      { $pull: { houses: houseID } },
    );

    await School.findOneAndUpdate(
      { _id: schoolID },
      { $push: { houses: { $each: [house], $sort: { score: 1 } } } },
    );
    console.log('Check 3')
    res.status(200).json({ message: 'House has been updated!', house });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  addHouse,
  deleteHouse,
  updateHouse,
  getHouseBySchool,
  // getHouseById,
};
