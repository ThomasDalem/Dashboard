const models = require('../models/UserModels');

exports.registerUser = async function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).end();
        return;
    }
    await models.registerUser(req.body.username, req.body.password);
    res.status(200).end();
};
