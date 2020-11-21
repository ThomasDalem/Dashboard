const router = require('express').Router();
const passport = require('passport');

const WeatherWidgetController = require('../controllers/WeatherWidgetController');

require('../config/passport')(passport);

router.use(passport.authenticate('jwt', { session: false }));

router.post('/change-city', WeatherWidgetController.changeCity);

module.exports = router;
