const router = require("express").Router();

const controller = require("../controllers/UserController");

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);

module.exports = router;
