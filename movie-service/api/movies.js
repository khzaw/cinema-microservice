'use strict';

const status = require('http-status');

module.exports = (app, options) => {
  const { repo } = options;

  app.get('/movies', async (req, res, next) => {
    try {
      const movies = await repo.getAllMovies();
      return res.status(status.OK).json(movies);
    } catch (e) {
      next();
    }
  });

  app.get('/movies/premieres', async (req, res, next) => {
    try {
      const movies = await repo.getMoviePremiers();
      return res.status(status.OK).json(movies);
    } catch (e) {
      next();
    }
  });

  app.get('/movies/:id', async (req, res, next) => {
    try {
      const movie = await repo.getMovieById(req.params.id);
      return res.status(status.OK).json(movie);
    } catch (e) {
      next();
    }
  });

}