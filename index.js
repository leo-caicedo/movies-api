const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

// routes
moviesAPI(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
