const PORT = process.env.PORT || 5000;

// Modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const server = express();


const database = require('./database');

// Global Middleware
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('combined'));


// Creating Log Files
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, './access.log'),
  { flags: 'a'}
);

// Running the auth routes
const authRoutes = require('./auth/routes/routes');

authRoutes(server);


// Running the House routes
const houseRoutes = require('./houses/routes/routes');

houseRoutes(server);

// Running the Payment routes
const paymentRoutes = require('./payment/routes/routes');

paymentRoutes(server);

// Connect Database
database.connect();


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
