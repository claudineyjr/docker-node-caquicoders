const router = require('express').Router();
const movieController = require('../controllers/movie');

router.get('/', movieController.get);
router.post('/', movieController.post);

module.exports = router;