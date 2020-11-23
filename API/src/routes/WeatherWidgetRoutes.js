const router = require('express').Router();
const passport = require('passport');

const WeatherWidgetController = require('../controllers/WeatherWidgetController');

require('../config/passport')(passport);

router.use(passport.authenticate('jwt', { session: false }));

router.post('/add-widget', WeatherWidgetController.addWidget);
router.post('/change-params', WeatherWidgetController.changeParams);
router.get('/', WeatherWidgetController.getWidgets);

module.exports = router;
