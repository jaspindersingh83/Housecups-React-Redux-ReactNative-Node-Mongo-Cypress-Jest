const PORT = 5000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { } = require('./middlewares');
const routes = require('./routes');

const server = express();

server.use(bodyParser.json());
server.use(cors());

routes(server);

server.listen(5000, () => {
  console.log(`Express server is running on http://localhost:5000`);
});
