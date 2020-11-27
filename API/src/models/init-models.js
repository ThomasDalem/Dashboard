var DataTypes = require("sequelize").DataTypes;
var _github_infos_user_widget = require("./github_infos_user_widget");
var _github_search_user_widget = require("./github_search_user_widget");
var _github_user_repos_widget = require("./github_user_repos_widget");
var _money_converter_widget = require("./money_converter_widget");
var _user = require("./user");
var _weather_widget = require("./weather_widget");

function initModels(sequelize) {
  var github_infos_user_widget = _github_infos_user_widget(sequelize, DataTypes);
  var github_search_user_widget = _github_search_user_widget(sequelize, DataTypes);
  var github_user_repos_widget = _github_user_repos_widget(sequelize, DataTypes);
  var money_converter_widget = _money_converter_widget(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var weather_widget = _weather_widget(sequelize, DataTypes);

  github_infos_user_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(github_infos_user_widget, { foreignKey: "id_user"});
  github_search_user_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(github_search_user_widget, { foreignKey: "id_user"});
  github_user_repos_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(github_user_repos_widget, { foreignKey: "id_user"});
  money_converter_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(money_converter_widget, { foreignKey: "id_user"});
  weather_widget.belongsTo(user, { foreignKey: "id_user"});
  user.hasMany(weather_widget, { foreignKey: "id_user"});

  return {
    github_infos_user_widget,
    github_search_user_widget,
    github_user_repos_widget,
    money_converter_widget,
    user,
    weather_widget,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
