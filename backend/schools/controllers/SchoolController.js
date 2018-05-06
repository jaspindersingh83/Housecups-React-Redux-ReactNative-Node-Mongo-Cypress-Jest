const School = require('../models/SchoolModel.js');
const User = require('../../auth/models/UserModel');
const moment = require('moment');

// add school
const addSchool = async (req, res) => {
  const schoolInfo = req.body;
  const { username } = req.decoded;
  try {
    const foundUser = await User.findOne({ username });
    schoolInfo.admin = foundUser._id;
    const result = await School.create(schoolInfo);
    await User.update(
      { username },
      { isAdmin: true, schoolID: result._id, updatedAt: moment() },
    );
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
