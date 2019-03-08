const router = require('express').Router();
const indexController = require('../controllers/index');

router.get('/', indexController.get);
router.use('/movie', require('./movies'));

module.exports = router;
