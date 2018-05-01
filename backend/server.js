const PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { } = require('./middlewares');
const routes = require('./routes');
<<<<<<< HEAD
const database = require('./database');
=======
<<<<<<< HEAD
const database = require('./database');
=======
>>>>>>> master
>>>>>>> 52dd9724a980d5594c929d91761734fe28ec49ed

const server = express();

server.use(bodyParser.json());
server.use(cors());

<<<<<<< HEAD
database.connect();
routes(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
<<<<<<< HEAD
database.connect();
routes(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
routes(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${ PORT }`);
>>>>>>> master
>>>>>>> 52dd9724a980d5594c929d91761734fe28ec49ed
});
