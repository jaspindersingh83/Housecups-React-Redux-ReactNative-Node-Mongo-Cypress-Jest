const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const House = require('./appModels/houses');
const School = require('./appModels/schools');
const User = require('./appModels/users');
require('dotenv').config();

const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API running' });
});

// create school
server.post('/api/school', (req, res) => {
  const schoolInfo = req.body;

  const school = new School(schoolInfo);

  school.save()
    .then((newSchool) => {
      res.status(201).json(newSchool);
    })
    .catch((error) => {
      res.status(500).json({ message: 'There was an error whilst saving the School to the database', error });
    });
});

// add teacher
server.post('/api/teacher', (req, res) => {
  const teacherInfo = req.body;

  const teacher = new User(teacherInfo);

  teacher.save()
    .then((newTeacher) => {
      res.status(201).json(newTeacher);
    })
    .catch((error) => {
      res.status(500).json({ message: 'There was an error whilst saving the School to the database', error });
    });
});

// delete Teachers
server.delete('/api/teacher/:id', (req, res) => {
  const { id } = req.params.id;

  User.findByIdAndRemove(id)
    .then((teacher) => {
      res.status(200).json({ message: 'Teacher Deleted!', teacher });
    })
    .catch((error) => {
      res.status(500).json({ message: 'The information cannot be deleted because it is invalid', error });
    });
});

// edit/update Teachers
server.put('/api/teacher/:id', (req, res) => {
  const { id } = req.params.id;
  const teacherInfo = req.body;

  User.findByIdAndUpdate(id, teacherInfo)
    .then((teacher) => {
      res.status(200).json({ message: 'Teacher has been updated!', teacher });
    })
    .catch((error) => {
      res.status(500).json({ message: 'The information cannot be deleted because it is invalid', error });
    });
});

// add houses
server.post('/api/house', (req, res) => {
  const houseInfo = req.body;

  const house = new House(houseInfo);

  house.save()
    .then((newhouse) => {
      res.status(201).json(newhouse);
    })
    .catch((error) => {
      res.status(500).json({ message: 'There was an error whilst saving the house to the database', error });
    });
});

// delete houses
server.delete('/api/house/:id', (req, res) => {
  const { id } = req.params.id;

  House.findByIdAndRemove(id)
    .then((house) => {
      res.status(200).json({ message: 'House Deleted!', house });
    })
    .catch((error) => {
      res.status(500).json({ message: 'The information cannot be deleted because it is invalid', error });
    });
});

// update/edit house
server.put('/api/house/:id', (req, res) => {
  const { id } = req.params.id;
  const houseInfo = req.body;

  House.findByIdAndUpdate(id, houseInfo)
    .then((house) => {
      res.status(200).json({ message: 'House has been updated!', house });
    })
    .catch((error) => {
      res.status(500).json({ message: 'The information cannot be deleted because it is invalid', error });
    });
});

const port = process.env.PORT || 5050;


// database related plumbing
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbPath = `mongodb://${dbuser}:${dbpassword}@ds111050.mlab.com:11050/house_cup_db`;

mongoose.Promise = global.Promise;

mongoose
  .connect(dbPath)
  .then(() => {
    server.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
    console.log('database is connected sucessfully');
  })
  .catch((error) => {
    console.log('Database connection failed');
    console.log(error);
  });
