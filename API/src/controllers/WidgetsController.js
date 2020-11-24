const db = require("../models");
const weather_widget = require("../models/weather_widget");

exports.getWidgets = async (req, res) => {
  const userID = req.user.id;
  const weatherWidgets = await db.weather_widget.findAll({
    where: { id_user: userID },
  });

  res.json({ weatherWidgets: weatherWidgets });
};
