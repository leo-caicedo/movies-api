const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');
const testAPI = require('./routes/test');

moviesAPI(app);
testAPI(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
