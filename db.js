const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Database Information
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbPath = `mongodb://${dbuser}:${dbpassword}@ds111050.mlab.com:11050/house_cup_db`;

mongoose.connect(dbPath)
  .then(() => {
    console.log('database is connected sucessfully');
  })
  .catch(() => {
    console.log('Database connection failed');
  });
