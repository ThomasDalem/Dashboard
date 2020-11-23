/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weather_widget', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    celcius: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    tableName: 'weather_widget',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "weather_widget_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
