const router = require('express')();

const movieController = require('../controllers/movieController');

router.get('/:id',
  movieController.getOneMovie,
  (req, res) => res.json(res.locals.data));

router.get('/',
  movieController.getAllMovies,
  (req, res) => res.json({ movies: res.locals.data }));

router.post('/',
  movieController.createMovie,
  (req, res) => res.json({ movies: res.locals.data }));

router.put('/:id/edit',
  movieController.updateMovie,
  (req, res) => res.render(res.locals.data));

router.delete('/:id',
  movieController.destroyMovie);

module.exports = router;
