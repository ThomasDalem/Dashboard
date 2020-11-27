const router = require("express").Router();
const passport = require("passport");

const widgetController = require("../controllers/GithubUserReposWidgetController");

require("../config/passport")(passport);
router.use(passport.authenticate("jwt", { session: false }));

router.post("/add-widget", widgetController.addWidget);
router.post("/change-params", widgetController.changeParams);
router.get("/", widgetController.getWidgets);

module.exports = router;
