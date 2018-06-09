const mongoose = require('mongoose');

// Mongo Auth Information
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbPath = `mongodb://localhost/house_cup_db`;

exports.connectToTestDb = function () {
  return new Promise((resolve, reject) => {
    mongoose.connect(dbPath);
    const db = mongoose.connection;
    db.on('error', () => {
      console.error('connection error');
      reject();
    });
    db.once('open', resolve);
  });
};

exports.dropTestCollections = async function () {
  await mongoose.connection.db.dropDatabase();
};