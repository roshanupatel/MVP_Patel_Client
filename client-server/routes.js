const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.get('/getTrails', controllers.getTrails);
router.get('/login/:id', controllers.loginUser);
router.post('/signup/:id', controllers.signUpUser);

module.exports = router;
