var DataTypes = require("sequelize").DataTypes;
var _user = require("./user");
var _weather_widget = require("./weather_widget");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var weather_widget = _weather_widget(sequelize, DataTypes);

  weather_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(weather_widget, { foreignKey: "id_user"});

  return {
    user,
    weather_widget,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
