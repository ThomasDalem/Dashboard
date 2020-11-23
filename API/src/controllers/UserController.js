const db = require("../models");
const generateJWT = require("../config/generateJWT");

exports.registerUser = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).end();
    return;
  }
  const user = await db.user.create({
    username: req.body.username,
    password: req.body.password,
  });
  const jwt = generateJWT(user);

  res.json({
    user: user.toJSON(),
    token: jwt.token,
    expiresIn: jwt.expires,
  });
};

exports.loginUser = async (req, res) => {
  db.user
    .findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) {
        res.status(404).end();
        return;
      }
      if (req.body.password !== user.password) {
        res
          .status(401)
          .json({ success: false, message: "Wrong password for this user" });
        return;
      }
      const jwt = generateJWT(user);
      res.json({
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
