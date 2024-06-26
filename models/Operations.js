const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Operations', {
    operations_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    part_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parts',
        key: 'part_id'
      }
    },
    operation_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation_revision: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Operations',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Operatio__F8BE6CC81947D260",
        unique: true,
        fields: [
          { name: "operations_id" },
        ]
      },
      {
        name: "PK__Operatio__F8BE6CC89A2454C5",
        unique: true,
        fields: [
          { name: "operations_id" },
        ]
      },
    ]
  });
};
