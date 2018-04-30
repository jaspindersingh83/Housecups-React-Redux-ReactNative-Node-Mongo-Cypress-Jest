require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Sample = require('./Samplemodels/samplemodels.js');

const server = express();

server.use(bodyParser.json());

const port = process.env.PORT || 5050; // if there is no specified port in .env use port 5050

// database related plumbing
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;



const dbPath = `mongodb://${dbuser}:${dbpassword}@ds111050.mlab.com:11050/house_cup_db`;


mongoose.Promise = global.Promise;

mongoose
.connect(dbPath)
.then(() => {
    console.log('database is connected sucessfully')
})
.catch( (error) => {
    console.log('Database connection failed')
});



// Test routes
server.get('/', (req, res) => {
    res.status(200).json( {message: 'welcome to the house cup API'} );
})

server.post('/api/person', (req, res) => {
    const personInfo = req.body;
    console.log(personInfo);
    console.log(req);
    const person = new Sample(personInfo);

    person.save()
    .then((newPerson) => {
        res.status(201).json(newPerson)
    })
    .catch(() => {
        res.status(500).json({error: "There was an error while saving the person to the database"})
    })
})






