/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money_converter_widget', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    base_money: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    convert_to_money: {
      type: DataTypes.STRING(5),
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
    tableName: 'money_converter_widget',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "money_converter_widget_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
