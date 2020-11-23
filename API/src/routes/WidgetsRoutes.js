const router = require("express").Router();
const controller = require("../controllers/WidgetsController");
const passport = require("passport");

require("../config/passport")(passport);
router.use(passport.authenticate("jwt", { session: false }));

router.get("/", controller.getWidgets);

module.exports = router;
