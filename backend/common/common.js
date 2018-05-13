const jwt = require('jsonwebtoken');

const { mysecret } = process.env;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
};

const ifSchoolAdmin = async (req, res) => {
  const { isAdmin } = req.decoded;
  if (isAdmin) return res.status(200).json({ success: true });
  return res.status(200).json({ success: false });
};

const ifSuperAdmin = async (req, res) => {
  const { isSuperAdmin } = req.decoded;
  if (isSuperAdmin) return res.status(200).json({ success: true });
  return res.status(200).json({ success: false });
};

const ifTeacher = async (req, res) => {
  const { isTeacher } = req.decoded;
  if (isTeacher) return res.status(200).json({ success: true });
  return res.status(200).json({ success: false });
};

module.exports = {
  authenticate,
  ifSchoolAdmin,
  ifSuperAdmin,
  ifTeacher,
};
