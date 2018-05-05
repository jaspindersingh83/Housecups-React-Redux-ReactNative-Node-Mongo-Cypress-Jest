const School = require('../models/SchoolModel.js');
const moment = require('moment');

// add houses
const addSchool = async (req, res) => {
  const schoolInfo = req.body;
  console.log(schoolInfo)
  try {
    const result = await School.create({
      schoolInfo,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get all Schools
const getAllSchools = async (req, res) => {
  try {
    const schools = await School.find({});
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: 'No Schools in db presently', error });
  }
};

module.exports = {
  addSchool,
  getAllSchools,
};
