const PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { } = require('./middlewares');
const routes = require('./routes');
const database = require('./database');

const server = express();

server.use(bodyParser.json());
server.use(cors());

database.connect();
routes(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
