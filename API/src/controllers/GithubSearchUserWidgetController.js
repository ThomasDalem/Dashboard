const db = require("../models");

exports.addWidget = async (req, res) => {
  const { username } = req.body;
  const widget = await db.github_search_user_widget
    .create({
      id_user: req.user.id,
      username: username
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
      return;
    });
  res.json({ widget: widget.toJSON() });
};

exports.changeParams = async (req, res) => {
  const { id, username } = req.body;
  const widget = await db.github_search_user_widget.findOne({
    where: { id_user: req.user.id, id: id },
  });

  if (!widget) {
    res.status(404).end();
    return;
  }
  widget.username = username ? username : widget.username;
  await widget.save();
  res.json({ widget: widget.toJSON() });
};

exports.getWidgets = async (req, res) => {
  const widgets = await db.github_search_user_widget.findAll({
    where: { id_user: req.user.id },
  });

  if (!widgets || widgets.length == 0) {
    res.status(404).end();
    return;
  }
  res.json({ widgets: widgets });
};
