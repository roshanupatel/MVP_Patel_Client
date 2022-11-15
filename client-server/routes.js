const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.get('/', controllers.getTrails);

module.exports = router;