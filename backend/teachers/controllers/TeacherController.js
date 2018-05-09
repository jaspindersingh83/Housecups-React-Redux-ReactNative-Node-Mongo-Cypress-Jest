const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Email Settings
const {
  mysecret,
  adminemail,
  adminusername,
  adminpassword,
} = process.env;

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: adminusername,
    pass: adminpassword,
  },
});

// Importing relevant Models
const User = require('../../auth/models/UserModel');
const School = require('../../schools/models/SchoolModel');

const addAsNonSignedTeacher = async (req, res, next) => {
  const { schoolID } = req.decoded;
  const teacherInfo = req.body;
  try {
    await School.findOneAndUpdate(
      { _id: schoolID },
      { $push: { nonSignedUpTeachers: teacherInfo } },
    );
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// create a Teacher in USer Model
const createTeacher = async (req, res) => {
  const { username } = req.body;
  const { email } = req.decoded;
  const { hashedPassword } = req;
  try {
    const result = await User.create({
      username,
      email,
      passwordHash: hashedPassword,
      isTeacher: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(422).json({ message: error });
  }
};
// Send a signup request to added Teachers
const sendTeacherSignupRequest = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const payload = { firstName, lastName, email };
  const token = await jwt.sign(payload, mysecret, { expiresIn: '48h' });
  const mailOptions = {
    to: email,
    from: adminemail,
    subject: 'Teacher Signup Request for Housecups',
    text:
      `Hi ${firstName}\n\n` +
      'You are receiving this because your school admin has added you to the list of teachers for school.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      `http://localhost:3000/reset?${token}\n\n` +
      '\n\n' +
      'Thanks Team Housecups',
  };
  try {
    await smtpTransport.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    return res.status(422).json({ message: 'Email could not be sent' });
  }
};

// delete teacher
const deleteTeacher = async (req, res) => {
  const teacherID = req.params.id;
  try {
    const teacher = await User.findById(teacherID);
    const { schoolID } = teacher;
    await School.findOneAndUpdate(
      { _id: schoolID },
      { $pull: { teachers: { _id: teacherID } } },
    );
    const removedTeacher = await User.findByIdAndRemove(teacherID);
    res.status(200).json({ success: true, removedTeacher });
  } catch (error) {
    res.status(500).json({ message: 'No such teacher in database', error });
  }
};
// get all Houses
const getTeachersBySchool = async (req, res) => {
  const { schoolID } = req.decoded;
  try {
    const school = await School.find(schoolID);
    const { teachers } = school;
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'No teachers in database for this school', error });
  }
};

// get Teacher by Id
const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await User.findById(id);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'No such teacher in database', error });
  }
};

module.exports = {
  addAsNonSignedTeacher,
  createTeacher,
  deleteTeacher,
  getTeachersBySchool,
  getTeacherById,
  sendTeacherSignupRequest,
};
