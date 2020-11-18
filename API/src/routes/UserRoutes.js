module.exports = async function (app) {
    const controller = require("../controllers/UserController");

    app.post('/user/register', controller.registerUser);
    app.post('/user/login', controller.loginUser);
};
