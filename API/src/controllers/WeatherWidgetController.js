const db = require("../models");

const API_KEY = "2d72361715cd55cf0fe168aa6eb3e0e4";

exports.addWidget = async (req, res) => {
  const { city, postalCode, celcius } = req.body;
  const widget = await db.weather_widget
    .create({
      id_user: req.user.id,
      city: city,
      postal_code: postalCode,
      celcius: celcius,
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
      return;
    });
  res.json({ widget: widget.toJSON() });
};

exports.changeParams = async (req, res) => {
  const { id, city, postalCode, celcius } = req.body;
  const widget = await db.weather_widget.findOne({
    where: { id_user: req.user.id, id: id },
  });

  if (!widget) {
    res.status(404).end();
    return;
  }
  widget.city = city ? city : widget.city;
  widget.postal_code = postalCode ? postalCode : widget.postal_code;
  widget.celcius = celcius ? celcius : widget.celcius;
  await widget.save();
  res.json({ widget: widget.toJSON() });
};

exports.getWidgets = async (req, res) => {
  const widgets = await db.weather_widget.findAll({
    where: { id_user: req.user.id },
  });

  if (!widgets || widgets.length == 0) {
    res.status(404).end();
    return;
  }
  res.json({ widgets: widgets });
};
