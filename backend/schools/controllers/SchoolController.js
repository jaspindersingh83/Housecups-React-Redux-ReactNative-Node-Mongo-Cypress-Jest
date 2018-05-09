const School = require('../models/SchoolModel');
const House = require('../../houses/models/HouseModel');

const addSchool = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await School.create({
      name,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to insert new School entry', error });
  }
};

const getSchoolInfo = async (req, res) => {
  const { name } = req.params;
  try {
    const school = await School.findOne({ name });
    school.houses = await House.find({
      _id: {
        $in: school.houses,
      },
    });
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: 'No such house in database', error });
  }
};

module.exports = {
  addSchool,
  getSchoolInfo,
};
