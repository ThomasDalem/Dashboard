/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('github_search_user_widget', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'github_search_user_widget',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "github_search_user_widget_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
