const express = require('express');
const { moviesMock } = require('../utils/mocks/movies')

function moviesAPI(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movies,
        message: 'movies retrived',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const createMovie = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createMovie,
        message: 'movie create',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:id', async function (req, res, next) {
    try {
      const updateMovie = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updateMovie,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:id', async function (req, res, next) {
    try {
      const deleteMovie = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deleteMovie,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesAPI;
