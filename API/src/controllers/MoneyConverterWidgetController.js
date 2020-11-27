const db = require("../models");

exports.addWidget = async (req, res) => {
  const { baseMoney, amount, convertToMoney } = req.body;
  const widget = await db.money_converter_widget
    .create({
      id_user: req.user.id,
      base_money: baseMoney,
      amount: amount,
      convert_to_money: convertToMoney,
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
      return;
    });
  res.json({ widget: widget.toJSON() });
};

exports.changeParams = async (req, res) => {
  const { id, baseMoney, amount, convertToMoney } = req.body;
  const widget = await db.money_converter_widget.findOne({
    where: { id_user: req.user.id, id: id },
  });

  if (!widget) {
    res.status(404).end();
    return;
  }
  widget.base_money = baseMoney ? baseMoney : widget.base_money;
  widget.amount = amount ? amount : widget.amount;
  widget.convert_to_money = convertToMoney ? convertToMoney : widget.convert_to_money;
  await widget.save();
  res.json({ widget: widget.toJSON() });
};

exports.getWidgets = async (req, res) => {
  const widgets = await db.money_converter_widget.findAll({
    where: { id_user: req.user.id },
  });

  if (!widgets || widgets.length == 0) {
    res.status(404).end();
    return;
  }
  res.json({ widgets: widgets });
};
