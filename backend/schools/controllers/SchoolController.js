const School = require('../models/SchoolModel.js');
const User = require('../../auth/models/UserModel');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const {
  mysecret,
} = process.env;

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
    const updatedUser = await User.findOne({ username });
    const { isAdmin, isTeacher, isSuperAdmin, schoolID } = updatedUser;
    const payload = { username, isAdmin, isTeacher, isSuperAdmin, schoolID };
    const token = await jwt.sign(payload, mysecret);
    res.status(201).json({ result, token });
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

// Search Schools based on name and location in a JSON query
// Used on path /search-schools
const searchSchools = async (req, res) => {
  const { name, location } = req.query;
  try {
    const nameQuery = { name: new RegExp(name, 'gi') };
    const locationQuery = { location: new RegExp(location, 'gi') };
    const schools = await School.where(nameQuery).where(locationQuery);
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: 'No matching Schools in db presently', error });
  }
};

module.exports = {
  addSchool,
  getAllSchools,
  searchSchools,
};
